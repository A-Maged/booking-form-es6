import { DateRangePicker } from 'tiny-date-picker/dist/date-range-picker';
import Modal from './Modal';
import store from './stateManager/store';
import * as actions from './stateManager/actions';

let datePicker,
	modal = new Modal(),
	reservationForm = document.querySelector('[data-hook=reservation-form]'),
	checkInOutField = reservationForm.querySelector('[data-hook=form-field-check-in-out]'),
	occupancyField = reservationForm.querySelector('[data-hook=form-field-occupancy]'),
	destinitionField = reservationForm.querySelector('[data-hook=form-field-destinition]'),
	occupancyDropDown = occupancyField.querySelector('.form-field__dropdown--occupancy'),
	searchField = reservationForm.querySelector('[ data-hook=form-field-search]'),
	destinitionList = reservationForm.querySelector('[ data-hook*=destinition-list]');

// DEBUG
store.subscribe(() => console.log(store.getState()));

/*********************************************************
 * NOTE :
 * only change dom using predefined functions
 * that are invoked on state changes
 *********************************************************/

/* Functions That Changes State */
/*******************************/

/* field: destinition */
// update Destination from event value
searchField.addEventListener('input', e => {
	store.dispatch(actions.updateDestination(e.target.value));
});

/* field: destinition */
// update Destination from li
destinitionList.addEventListener('click', e => {
	store.dispatch(actions.updateDestination(e.target.innerHTML));
});

/* field: destinition */
searchField.addEventListener('focus', e => {
	store.dispatch(actions.showDestinitionList());
});

/* field: destinition */
document.addEventListener('click', e => {
	if (e.target !== searchField && store.getState().ui.visibleDropdown === 'destination-list') {
		store.dispatch(actions.hideDropDown());
	}
});

/* field: checkInOut */
checkInOutField.addEventListener('click', e => {
	store.dispatch(actions.showDatePickerModal());
});

/* Functions That Changes DOM */
/*******************************/

function updateDestinationDOM() {
	searchField.innerHTML = store.getState().destinition;
}

function showDestinationListDOM() {
	if (store.getState().ui.visibleDropdown === 'destination-list') {
		destinitionList.classList.add('visibile');
	}
}

function hideDestinationListDOM() {
	if (store.getState().ui.visibleDropdown !== 'destination-list') {
		destinitionList.classList.remove('visibile');
	}
}

function showDatePickerDOM() {
	if (store.getState().ui.visibleDropdown === 'date-picker-modal') {
		modal.open();
		datePicker = DateRangePicker(document.querySelector('.modal-body'));
	}
}

function updateOccopancyDOM() {
	let state = store.getState().form.occupancy;
	occupancyDropDown.innerHTML = '';

	state.forEach((room, idx) => {
		occupancyDropDown.innerHTML += `
			<div class="occupancy__room">
				<span class="occupancy__room__label">Room ${idx + 1}</span>
				<select name="occupancy__room-${idx}-adults">
					<option selected="selected" value="${room.adults}">${room.adults}</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
			</div>
		`;
	});
}

/* Subscribe To Store Changes */
/* ************************** */
store.subscribe(updateDestinationDOM);
store.subscribe(updateOccopancyDOM);
store.subscribe(showDestinationListDOM);
store.subscribe(hideDestinationListDOM);
store.subscribe(showDatePickerDOM);

// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************

/* type: changes DOM */
/* field: occupancy */
/* toggle occupancy-dropDown */
occupancyField.addEventListener('click', e => {
	if (
		e.target === e.currentTarget ||
		e.target === occupancyField.querySelector('.form-field__icon') ||
		e.target === occupancyField.querySelector('.form-field__value-box')
	) {
		occupancyDropDown.classList.toggle('visibile');
	}
});

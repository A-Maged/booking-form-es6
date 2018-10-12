import { DateRangePicker } from 'tiny-date-picker/dist/date-range-picker';
import Modal from './Modal';
import store from './stateManager/store';
import * as actions from './stateManager/actions';

let datePicker;
let modal = new Modal();
// DOM elements
let reservationForm = document.querySelector('[data-hook=reservation-form]');
let checkInOutField = reservationForm.querySelector('[data-hook=form-field-check-in-out]');
let occupancyField = reservationForm.querySelector('[data-hook=form-field-occupancy]');
let destinitionField = reservationForm.querySelector('[data-hook=form-field-destinition]');
let occupancyDropDown = occupancyField.querySelector('.form-field__dropdown--occupancy');
let searchField = reservationForm.querySelector('[ data-hook=form-field-search]');
let destinitionList = reservationForm.querySelector('[ data-hook*=destinition-list]');

// DEBUG
store.subscribe(() => console.log(store.getState()));

// *******************************************************************
// NOTE :
// only change dom using state and predefined functions
// *******************************************************************

/* type: changes state */
searchField.addEventListener('input', e => {
	store.dispatch(actions.updateDestination(e.target.value));
});

/* type: changes state */
/* field: destinition-list */
searchField.addEventListener('focus', e => {
	store.dispatch(actions.showDestinitionList());
});

/* type: changes DOM */
/* field: destinition-list */
function updateDestinationDOM() {
	searchField.innerHTML = store.getState().destinition;
}
/* type: changes DOM */
/* field: occupancy */
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
/* type: changes DOM */
function showDestinationListDOM() {
	if (store.getState().ui.visibleDropdown === 'destination-list') {
		destinitionList.classList.add('visibile');
	}
}

/* type: subscribe to store changes */
store.subscribe(updateDestinationDOM);
store.subscribe(updateOccopancyDOM);
store.subscribe(showDestinationListDOM);

// ******************************************************************************************
// ******************************************************************************************

/* type: changes DOM */
/* field: destinition-list */
document.addEventListener('click', e => {
	if (e.target !== searchField) {
		destinitionList.classList.remove('visibile');
	}
});

/* type: changes state */
/* field: destinition-list */
destinitionList.addEventListener('click', e => {
	store.dispatch(actions.updateDestination(e.target.innerHTML));
});

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

/* type: changes DOM */
/* field: checkInOut */
/* show check-in-out datePicker */
checkInOutField.addEventListener('click', e => {
	modal.open();
	datePicker = DateRangePicker(document.querySelector('.modal-body'));
});

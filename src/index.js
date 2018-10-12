import { DateRangePicker } from 'tiny-date-picker/dist/date-range-picker';
import Modal from './Modal';
import store from './stateManager/store';
import * as actions from './stateManager/actions';

let datePicker;
let modal = new Modal();
// DOM elements
let reservationForm = document.querySelector('[data-hook=reservation-form]');
let checkInOut = reservationForm.querySelector('[data-hook=form-field-check-in-out]');
let occupancyField = reservationForm.querySelector('[data-hook=form-field-occupancy]');
let destinitionField = reservationForm.querySelector('[data-hook=form-field-destinition]');
let occupancyDropDown = occupancyField.querySelector('.form-field__dropdown--occupancy');
let searchField = reservationForm.querySelector('[ data-hook=form-field-search]');
let destinitionList = reservationForm.querySelector('[ data-hook*=destinition-list]');

// DEBUG
store.subscribe(() => console.log(store.getState()));

// *******************************************************************
/* only change dom using state and predefined functions */

searchField.addEventListener('input', e => {
	store.dispatch(actions.updateDestination(e.target.value));
});

store.subscribe(function updateDestinationDOM() {
	searchField.innerHTML = store.getState().destinition;
});

store.subscribe(function updateOccopancyDOM() {
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
});

// *******************************************************************
// *******************************************************************
// *******************************************************************

/* show  destinition-list */
searchField.addEventListener('focus', e => {
	destinitionList.classList.add('visibile');
});
/* hide  destinition-list */
document.addEventListener('click', e => {
	if (e.target !== searchField) {
		destinitionList.classList.remove('visibile');
	}
});
/* update state: destiniation */
destinitionList.addEventListener('click', e => {
	store.dispatch(actions.updateDestination(e.target.innerHTML));
});

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

/* show check-in-out datePicker */
checkInOut.addEventListener('click', e => {
	modal.open();
	datePicker = DateRangePicker(document.querySelector('.modal-body'));
});

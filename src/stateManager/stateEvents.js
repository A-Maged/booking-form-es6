import store from './store';
import * as actions from './actions';

let reservationForm = document.querySelector('[data-hook=reservation-form]'),
	checkInOutField = reservationForm.querySelector('[data-hook=form-field-check-in-out]'),
	occupancyField = reservationForm.querySelector('[data-hook=form-field-occupancy]'),
	occupancyDropDown = occupancyField.querySelector('.form-field__dropdown--occupancy'),
	searchField = reservationForm.querySelector('[ data-hook=form-field-search]'),
	destinitionList = reservationForm.querySelector('[ data-hook*=destinition-list]');

/*******************************/
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
// show destination list
searchField.addEventListener('focus', e => {
	store.dispatch(actions.showDestinitionList());
});

/* field: destinition */
// hide destination list
document.addEventListener('click', e => {
	if (e.target !== searchField && store.getState().ui.visibleDropdown === 'destination-list') {
		store.dispatch(actions.hideDropDown());
	}
});

/* field: checkInOut */
// show DatePicker Modal
checkInOutField.addEventListener('click', e => {
	store.dispatch(actions.showDatePickerModal());
});

/* field: occupancy */
/* toggle occupancy-dropDown */
occupancyField.addEventListener('click', e => {
	e.stopPropagation();

	if (store.getState().ui.visibleDropdown === 'occupancy-dropDown') {
		store.dispatch(actions.hideDropDown());
		return;
	}

	if (
		e.target === e.currentTarget ||
		e.target === occupancyField.querySelector('.form-field__icon') ||
		e.target === occupancyField.querySelector('.form-field__value-box')
	) {
		store.dispatch(actions.showOccupancyDropDown());
	}
});

/* field: occupancy */
/* hide occupancy-dropDown */
document.addEventListener('click', e => {
	if (
		store.getState().ui.visibleDropdown === 'occupancy-dropDown' &&
		e.target !== occupancyDropDown
	) {
		store.dispatch(actions.hideDropDown());
	}
});

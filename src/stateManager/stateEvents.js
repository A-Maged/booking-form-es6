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

/* update Destination from event value */
searchField.addEventListener('input', e => {
	store.dispatch(actions.updateDestination(e.target.value));
});

/* update Destination from li */
destinitionList.addEventListener('click', e => {
	store.dispatch(actions.updateDestination(e.target.innerHTML));
});

/* show destination list */
searchField.addEventListener('focus', e => {
	store.dispatch(actions.showDestinitionList());
});

/* hide destination list */
document.addEventListener('click', e => {
	if (e.target !== searchField && store.getState().ui.visibleDropdown === 'destination-list') {
		store.dispatch(actions.hideDropDown());
	}
});

/* show DatePicker Modal */
checkInOutField.addEventListener('click', e => {
	store.dispatch(actions.showDatePickerModal());
});

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

/* hide occupancy-dropDown */
document.addEventListener('click', e => {
	if (
		store.getState().ui.visibleDropdown === 'occupancy-dropDown' &&
		e.target !== occupancyDropDown
	) {
		store.dispatch(actions.hideDropDown());
	}
});

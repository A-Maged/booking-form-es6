import store from './store';
import * as actions from './actions';

let reservationForm = document.querySelector('[data-hook=reservation-form]'),
	checkInOutField = reservationForm.querySelector('[data-hook=form-field-check-in-out]'),
	occupancyField = reservationForm.querySelector('[data-hook=form-field-occupancy]'),
	searchField = reservationForm.querySelector('[ data-hook=form-field-search]'),
	occupancyDropDown = occupancyField.querySelector('.form-field__dropdown--occupancy'),
	destinitionList = reservationForm.querySelector('[ data-hook*=destinition-list]');

/*******************************/
/* Functions That Changes State */
/*******************************/

/* update Destination from event value */
searchField.addEventListener('input', function updateDestinationFromEvent(e) {
	store.dispatch(actions.updateDestination(e.target.value));
});

/* update Destination from li */
destinitionList.addEventListener('click', function updateDestinationFromElement(e) {
	store.dispatch(actions.updateDestination(e.target.innerHTML));
});

/* show destination list */
searchField.addEventListener('focus', function showDestinationList(e) {
	store.dispatch(actions.showDestinitionList());
});

/* hide destination list */
document.addEventListener('click', function hideDestinationList(e) {
	if (e.target !== searchField && store.getState().ui.visibleDropdown === 'destination-list') {
		store.dispatch(actions.hideDropDown());
	}
});

/* show DatePicker Modal */
checkInOutField.addEventListener('click', function showDatePickerModal(e) {
	store.dispatch(actions.showDatePickerModal());
});

/* toggle occupancy-dropDown */
occupancyField.addEventListener('click', function toggleOccupancyDropDown(e) {
	e.stopPropagation();

	if (
		e.target === e.currentTarget ||
		e.target === occupancyField.querySelector('.form-field__icon') ||
		e.target === occupancyField.querySelector('.form-field__value-box')
	) {
		console.log('toggleOccupancyDropDown');

		store.dispatch(actions.toggleOccupancyDropDown());
	}
});

/* hide occupancy-dropDown */
document.addEventListener('click', function hideOccupancyDropDown(e) {
	if (
		store.getState().ui.visibleDropdown === 'occupancy-dropDown' &&
		e.target !== occupancyDropDown
	) {
		console.log('hideOccupancyDropDown');
		store.dispatch(actions.hideDropDown());
	}
});

/* add occupancy-room */
occupancyDropDown.addEventListener('click', e => {
	let addRoomBtn = document.querySelector('[data-hook=occupancy-add-room]');
	if (e.target !== addRoomBtn) return;

	store.dispatch(
		actions.updateOccopancy({
			adults: 1,
			children: 0
		})
	);
});

import store from './store';

export const actionTypes = {
	UPDATE_DESTINATION: 'UPDATE_DESTINATION',
	UPDATE_CHECK_IN_OUT: 'UPDATE_CHECK_IN_OUT',
	UPDATE_OCCUPANCY: 'UPDATE_OCCUPANCY',
	REMOVE_OCCUPANCY_ROOM: 'REMOVE_OCCUPANCY_ROOM',

	UPDATE_VISIBLE_DROPDOWN: 'UPDATE_VISIBLE_DROPDOWN'
};

/* FORM ACTIONS */
/* ************ */

export const updateDestination = value => ({
	type: actionTypes.UPDATE_DESTINATION,
	value
});

export const updateCheckInOut = value => ({
	type: actionTypes.UPDATE_CHECK_IN_OUT,
	value
});

export const updateOccopancy = value => ({
	type: actionTypes.UPDATE_OCCUPANCY,
	value
});
export const removeOccopancyRoom = value => ({
	type: actionTypes.REMOVE_OCCUPANCY_ROOM
});

/* UI ACTIONS */
/* ********** */

export const showDestinitionList = () => {
	return {
		type: actionTypes.UPDATE_VISIBLE_DROPDOWN,
		value: 'destination-list'
	};
};
export const hideDropDown = () => {
	return {
		type: actionTypes.UPDATE_VISIBLE_DROPDOWN,
		value: ''
	};
};
export const showDatePickerModal = () => {
	return {
		type: actionTypes.UPDATE_VISIBLE_DROPDOWN,
		value: 'date-picker-modal'
	};
};
export const toggleOccupancyDropDown = () => {
	return {
		type: actionTypes.UPDATE_VISIBLE_DROPDOWN,
		value: (() =>
			store.getState().ui.visibleDropdown === 'occupancy-dropDown'
				? ''
				: 'occupancy-dropDown')()
	};
};

export const showOccupancyDropDown = () => {
	return {
		type: actionTypes.UPDATE_VISIBLE_DROPDOWN,
		value: 'occupancy-dropDown'
	};
};

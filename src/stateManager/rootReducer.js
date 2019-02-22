import { actionTypes } from './actions';
import { combineReducers } from 'redux';
import moment from 'moment';

let formInitialState = {
	destinition: '',
	checkInOut: {
		start: '',
		end: ''
	},
	occupancy: [
		{
			adults: 1,
			children: 0
		}
	]
};

function formReducer(state = formInitialState, action) {
	switch (action.type) {
		case actionTypes.UPDATE_DESTINATION:
			return { ...state, destinition: action.value };

		case actionTypes.UPDATE_CHECK_IN_OUT:
			return {
				...state,
				checkInOut: { ...state.checkInOut, ...action.value }
			};

		case actionTypes.UPDATE_OCCUPANCY:
			return {
				...state,
				occupancy: [...state.occupancy, action.value]
			};

		case actionTypes.REMOVE_OCCUPANCY_ROOM:
			let newArr = [...state.occupancy];
			newArr.pop();

			return {
				...state,
				occupancy: [...newArr]
			};

		default:
			return state;
	}
}

let uiInitialState = {
	visibleDropdown: ''
};

function uiReducer(state = uiInitialState, action) {
	switch (action.type) {
		case actionTypes.UPDATE_VISIBLE_DROPDOWN:
			return { ...state, visibleDropdown: action.value };

		default:
			return state;
	}
}
const rootReducer = combineReducers({
	form: formReducer,
	ui: uiReducer
});

export default rootReducer;

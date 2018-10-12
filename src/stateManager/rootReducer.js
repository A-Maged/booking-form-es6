import { actionTypes } from './actions';

let InitialState = {
	destinition: '',
	checkInOut: {
		start: '1',
		end: '2'
	},
	occupancy: []
};

function formReducer(state = InitialState, action) {
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
		default:
			return state;
	}
}

function rootReducer(state = {}, action) {
	return {
		form: formReducer(state.form, action)
	};
}

export default rootReducer;

import rootReducer from './rootReducer';

const creatStore = reducer => {
	var listeners = [];
	var state = reducer(undefined, { type: '' });

	const getState = () => {
		return state;
	};

	const subscribe = listener => {
		listeners.push(listener);
		return () => listeners.filter(currentListener => currentListener !== listener);
	};

	const dispatch = action => {
		state = reducer(state, action);

		listeners.map(cb => cb());
	};

	return {
		getState,
		subscribe,
		dispatch
	};
};

const store = creatStore(rootReducer);

export default store;

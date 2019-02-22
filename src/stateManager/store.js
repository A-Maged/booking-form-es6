import rootReducer from './rootReducer';
import { createStore } from 'redux';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// FOR DEBUGGING
// window.store = store;
store.subscribe(() => console.log(store.getState()));

export default store;

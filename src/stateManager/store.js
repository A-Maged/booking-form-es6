import rootReducer from './rootReducer';
import { createStore } from 'redux';

const store = createStore(rootReducer);

// FOR DEBUGGING
window.store = store;
store.subscribe(() => console.log(store.getState()));

export default store;

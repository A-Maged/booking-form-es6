/*********************************************************
 * NOTE :
 * only change dom using in contained functions that are invoked on state changes
 *********************************************************/

import './stateManager/stateEvents';
import './domManager';

import moment from 'moment';
import store from './stateManager/store';
import * as actions from './stateManager/actions';

store.dispatch(
	actions.updateCheckInOut({
		start: moment().format('DD MMM YYYY'),
		end: moment().format('DD MMM YYYY')
	})
);

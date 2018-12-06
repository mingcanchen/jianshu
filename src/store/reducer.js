import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
// redux-inmmutable
export default combineReducers ({
	header: headerReducer
})


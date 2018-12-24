import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	title: '',
	content: ''
});

const change_detail = (state, action) => {
	return state.merge({
				title: action.title,
				content: action.content
	});
};

export default (state= defaultState, action) => {

	switch (action.type) {
// 抽取
		case constants.CHANGE_DETAIL:
			return change_detail(state, action);
			
		default :
			return state;
	}

};
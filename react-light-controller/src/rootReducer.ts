import { combineReducers } from 'redux';
import _ from 'lodash';
import { ApiResultAction } from './applicationTypes';
import { default as lightsReducer } from 'domains/lights/reducer';

export const initialState = {
	lights: {}
};

const entities = (state = initialState, action: ApiResultAction) => {
	if (action.result && action.result.entities) {
		return _.mergeWith({}, state, action.result.entities);
	}
	return state;
};

export default combineReducers({
	entities,
	...lightsReducer
});
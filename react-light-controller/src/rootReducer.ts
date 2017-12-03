import { combineReducers } from 'redux';
import _ from 'lodash';
import { Action } from './applicationTypes';

export const initialState = {
	lights: { }
};

const entities = (state = initialState, action: Action) => {
	if (action.payload && action.payload.entities) {
		return _.mergeWith({}, state, action.payload.entities);
	}
	return initialState;
};

export default combineReducers({
	entities
});
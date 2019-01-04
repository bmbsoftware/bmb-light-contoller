import { combineReducers, Reducer } from 'redux';
import _, { Dictionary } from 'lodash';
import { ApiResultAction } from 'applicationTypes';
import lightsReducer from 'domains/lights/reducer';
import appReducer from 'domains/app/reducer';
import { LightHubLocation, Light } from 'domains/lights/model';
import { ApplicationState } from './domains/app/model';

export interface EntityState {
	lightHubLocation?: Dictionary<LightHubLocation>;
	lights: Dictionary<Light>;
}

export const initialState: EntityState = {
	lightHubLocation: {},
	lights: {}
};

const entities = (state = initialState, action: ApiResultAction) => {
	if (action.result && action.result.entities) {
		return _.mergeWith({}, state, action.result.entities);
	}
	return state;
};

const reducers: Reducer<any> = combineReducers({
	entities,
	domains: combineReducers({
		app: appReducer,
		lights: lightsReducer
	})
});

export default reducers;

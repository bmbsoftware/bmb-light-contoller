import { Action } from '../../applicationTypes';
import * as lightsActionTypes from './actionTypes';

export interface LightsDomainState {
	loading: boolean;
}

export const initialState: LightsDomainState = {
	loading: false,
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case lightsActionTypes.GET_ALL_LIGHTS:
			return {
				...state,
				loading: true
			};

		case lightsActionTypes.GET_ALL_LIGHTS_SUCCESS:
			return {
				...state,
				loading: false
			};

		case lightsActionTypes.GET_ALL_LIGHTS_FAIL:
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
};

export default reducer;

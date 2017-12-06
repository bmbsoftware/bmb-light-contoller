import { Action } from '../../applicationTypes';
import * as lightsActionTypes from './actionTypes';

interface LightsContainer {
	isLoaded: boolean;
}

interface LightsContainerState {
	loading: boolean;
	lightsContainer: LightsContainer;
}

export const initialState: LightsContainerState = {
	loading: false,
	lightsContainer: {
		isLoaded: false
	}
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case lightsActionTypes.GET_ALL_LIGHTS:
			return {
				...state,
				loading: true,
				lightsContainer: {
					isLoaded: false
				}
			};

		case lightsActionTypes.GET_ALL_LIGHTS_SUCCESS:
			return {
				...state,
				loading: false,
				lightsContainer: {
					isLoaded: true
				}
			};

		case lightsActionTypes.GET_ALL_LIGHTS_FAIL:
			return {
				...state,
				loading: false,
				lightsContainer: {
					isLoaded: false
				}
			};

		default:
			return state;
	}
};

export default reducer;

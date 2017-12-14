import * as actionTypes from 'domains/app/actionTypes';
import { Action } from 'applicationTypes';

export interface AppDomainState {
	loading: boolean;
}

export const initialState: AppDomainState = {
	loading: false
};

const reducer = (state: AppDomainState = initialState, action: Action) => {
	switch (action.type) {
		case actionTypes.LOAD_LIGHT_HUB_LOCATION:
			return {
				...state,
				loading: true
			};

		case actionTypes.LOAD_LIGHT_HUB_LOCATION_SUCCESS:
			return {
				...state,
				loading: false
			};

		case actionTypes.LOAD_LIGHT_HUB_LOCATION_FAIL:
			return {
				...state,
				loading: false
			};

		default:
			return state;
	}
};

export default reducer;

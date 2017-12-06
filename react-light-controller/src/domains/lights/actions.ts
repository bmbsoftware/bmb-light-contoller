import { Action, ApiAction } from '../../applicationTypes';
import * as actionTypes from './actionTypes';
import { LightState } from 'domains/lights/model';

export const doGetAllLights = (): Action => {
	return {
		type: actionTypes.GET_ALL_LIGHTS
	};
};

export const doSetLightState = (id: number, state: LightState): Action => {
	return {
		type: actionTypes.SET_LIGHT_STATE,
		payload: {
			id,
			state
		}
	};
};

export const getAllLights = (): ApiAction => {
	return {
		promise: (apiClient: any) => {
			return apiClient.get('/lights');
		}
	};
};

export const getLight = (id: number): ApiAction => {
	return {
		promise: (apiClient: any) => {
			return apiClient.get(`/lights/${id}`);
		}
	};
};

export const setLightState = (id: number, state: LightState): ApiAction => {
	return {
		promise: (apiClient: any) => {
			return apiClient.put(`/lights/${id}/state`, { data: state });
		}
	};
};

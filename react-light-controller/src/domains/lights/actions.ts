import { Action, ApiAction, ApiClient } from 'applicationTypes';
import { LightState } from 'domains/lights/model';
import * as actionTypes from './actionTypes';

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

export const getAllLights = (hubUrl: string): ApiAction => {
	return {
		promise: (apiClient: ApiClient) => {
			return apiClient.get(`http://${hubUrl}/api/${process.env.REACT_APP_API_USER}/lights`);
		}
	};
};

export const getLight = (hubUrl: string, id: number): ApiAction => {
	return {
		promise: (apiClient: ApiClient) => {
			return apiClient.get(`http://${hubUrl}/api/${process.env.REACT_APP_API_USER}/lights/${id}`);
		}
	};
};

export const setLightState = (hubUrl: string, id: number, state: LightState): ApiAction => {
	return {
		promise: (apiClient: ApiClient) => {
			return apiClient.put(`http://${hubUrl}/api/${process.env.REACT_APP_API_USER}/lights/${id}/state`, { data: state });
		}
	};
};

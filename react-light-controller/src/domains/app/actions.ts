import { Action, ApiAction, ApiClient } from 'applicationTypes';
import * as actionTypes from 'domains/app/actionTypes';

const lightHubLocationUrl = 'https://www.meethue.com/api/nupnp';

export const doLoadLightHubLocation = (): Action => {
	return {
		type: actionTypes.LOAD_LIGHT_HUB_LOCATION
	};
};

export const loadLightHubLocation = (): ApiAction => {
	return {
		promise: (apiClient: ApiClient) => {
			return apiClient.get(lightHubLocationUrl);
		}
	};
};
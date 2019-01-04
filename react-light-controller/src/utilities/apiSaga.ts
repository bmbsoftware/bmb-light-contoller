import { call } from 'redux-saga/effects';
import { ApiAction, ApiResultAction } from 'applicationTypes';
import ApiClient from 'utilities/apiClient';

export function* performRequest(action: ApiAction): object {
	const client = new ApiClient();
	let response = null;
	yield action.promise!(client).then(
		(result: ApiResultAction) => {
			response = result;
		},
		(error: any) => {
			if (error.status !== 401) {
				throw error;
			}
		});

	return response;
}

export function callApi(action: ApiAction): object {
	return call(performRequest, action);
}

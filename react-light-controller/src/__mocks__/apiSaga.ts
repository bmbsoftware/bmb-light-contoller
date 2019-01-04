import { call } from 'redux-saga/effects';
import { ApiAction } from '../applicationTypes';

export function* performRequest(action: ApiAction): object {
	return true;
}

export function callApi(action: ApiAction): object {
	return call(performRequest, action);
}

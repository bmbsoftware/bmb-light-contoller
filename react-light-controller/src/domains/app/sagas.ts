import { all, take, put, fork } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { callApi } from 'utilities/apiSaga';

function* watchForLoadHubLocation() {
	while (true) {
		yield take(actionTypes.LOAD_LIGHT_HUB_LOCATION);
		try {
			const lightHubLocation = yield callApi(actions.loadLightHubLocation());
			const result = {
				entities: {
					lightHubLocation
				}
			};
			yield put({ type: actionTypes.LOAD_LIGHT_HUB_LOCATION_SUCCESS, result });
		} catch (exception) {
			yield put({ type: actionTypes.LOAD_LIGHT_HUB_LOCATION_FAIL, exception });
		}
	}
}

export default function* watchForAllAppSagas() {
	yield all([
		fork(watchForLoadHubLocation)
	]);		
}
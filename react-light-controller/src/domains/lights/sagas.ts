import { all, take, put, fork, select } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { callApi } from 'utilities/apiSaga';
import { ApplicationState } from 'applicationTypes';

const hubUrlSelector = (state: ApplicationState) => 
	state.entities.lightHubLocation && state.entities.lightHubLocation[0].internalipaddress;

function* watchForGetAllLights() {
	while (true) {
		yield take(actionTypes.GET_ALL_LIGHTS);
		try {
			const hubUrl = yield select(hubUrlSelector);
			const lights = yield callApi(actions.getAllLights(hubUrl));
			const result = {
				entities: {
					lights
				}
			};
			yield put({ type: actionTypes.GET_ALL_LIGHTS_SUCCESS, result });
		} catch (exception) {
			yield put({ type: actionTypes.GET_ALL_LIGHTS_FAIL, exception });
		}
	}
}

function* watchForSetLightState() {
	while (true) {
		const action = yield take(actionTypes.SET_LIGHT_STATE);
		try {
			const { id, state } = action.payload;
			const hubUrl = yield select(hubUrlSelector);
			yield callApi(actions.setLightState(hubUrl, id, state));
			const lights = yield callApi(actions.getAllLights(hubUrl));
			const result = {
				entities: {
					lights
				}
			};
			yield put({ type: actionTypes.SET_LIGHT_STATE_SUCCESS, result });
		} catch (exception) {
			yield put({ type: actionTypes.SET_LIGHT_STATE_FAIL, exception });
		}
	}
}

export default function* watchForLightsSagas() {
	yield all([
		fork(watchForGetAllLights),
		fork(watchForSetLightState)
	]);
}

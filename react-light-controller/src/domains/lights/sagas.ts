import { all, take, put, fork, select, call } from 'redux-saga/effects';
import { callApi } from 'utilities/apiSaga';
import { ApplicationState, Action } from 'applicationTypes';
import * as actionTypes from './actionTypes';
import * as actions from './actions';

export const hubUrlSelector = (state: ApplicationState) => 
	state.entities.lightHubLocation && state.entities.lightHubLocation[0].internalipaddress;

export function* watchForGetAllLights() {
	while (true) {
		yield take(actionTypes.GET_ALL_LIGHTS);
		yield call(getAllLights);
	}
}

export function* getAllLights() {
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

export function* watchForSetLightState() {
	while (true) {
		const action = yield take(actionTypes.SET_LIGHT_STATE);
		yield call(setLightState, action);
	}
}

export function* setLightState(action: Action) {
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

export default function* watchForLightsSagas() {
	yield all([
		fork(watchForGetAllLights),
		fork(watchForSetLightState)
	]);
}

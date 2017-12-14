import { all, fork } from 'redux-saga/effects';
import watchForLightsSagas from 'domains/lights/sagas';
import watchForAllAppSagas from 'domains/app/sagas';

export default function* root() {
	yield all([
		fork(watchForLightsSagas),
		fork(watchForAllAppSagas)
	]);
}

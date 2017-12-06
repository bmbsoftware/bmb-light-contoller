import { all, fork } from 'redux-saga/effects';
import watchForLightsSagas from 'domains/lights/sagas';

export default function* root() {
	yield all([
		fork(watchForLightsSagas)
	]);
}

// import { runSaga } from 'redux-saga';
// // import { cloneableGenerator } from 'redux-saga/utils';
// import { take } from 'redux-saga/effects';
// import * as sagas from 'domains/lights/sagas';
// import * as actionTypes from 'domains/lights/actionTypes';
// // import * as actions from 'domains/lights/actions';
// import { callApi } from 'utilities/apiSaga';

// jest.mock('utilities/apiSaga');

// const mockLights = [{
// 	id: 1,
// 	type: 'test',
// 	state: 'off'
// }];

// callApi.mockImplementation((action) => {
// 	console.log(action);
// 	switch (action.type) {
// 		case actionTypes.GET_ALL_LIGHTS:
// 			return mockLights;
// 		case actionTypes.SET_LIGHT_STATE:
// 			const newLightState = [...mockLights];
// 			newLightState[0].state = action.payload.state;
// 			return newLightState;
// 		default:
// 			return mockLights;
// 	}
// });

// describe('Lights sagas tests', () => {
// 	const state = {
// 		entities: {
// 			lightHubLocation: [
// 				{ internalipaddress: '1.2.3.4' }
// 			]
// 		}
// 	};

// 	const getState = () => state;

// 	describe('watchForLoadAllLightsSagas', () => {
// 		const gen = sagas.default();

// 		it('should fork all watcher functions', () => {
// 			const nextResult = gen.next().value;
// 			expect(nextResult).toBeDefined();
// 		});

// 		it('should be done', () => {
// 			const nextResult = gen.next().done;
// 			expect(nextResult).toEqual(true);
// 		});
// 	});

// 	describe('watchForGetAllLights', () => {
// 		const gen = sagas.watchForGetAllLights();

// 		it('should take action', () => {
// 			const nextResult = gen.next().value;
// 			expect(nextResult).toEqual(take(actionTypes.GET_ALL_LIGHTS));
// 		});

// 		it('should call main function', () => {
// 			const nextResult = gen.next().value;
// 			expect(nextResult).toHaveProperty('CALL');
// 		});

// 		it('should loop and take action again', () => {
// 			const nextResult = gen.next().value;
// 			expect(nextResult).toEqual(take(actionTypes.GET_ALL_LIGHTS));
// 		});
// 	});

// 	// describe('getAllLights', () => {
// 	// 	const gen = cloneableGenerator(sagas.getAllLights as any)();

// 	// 	it('should select the hub url from state', () => {
// 	// 		const nextResult = gen.next().value;
// 	// 		expect(nextResult).toEqual(select(sagas.hubUrlSelector));
// 	// 	});

// 	// 	it('should call the api with a GET_ALL_LIGHTS action', () => {
// 	// 		const hubUrl = '0.0.0.0';
// 	// 		const nextResult = gen.next(hubUrl).value;
// 	// 		expect(nextResult).toEqual(mockLights);
// 	// 	});

// 	// 	const apiResult = { name: 'test name' };
// 	// 	it('should put success action', () => {
// 	// 		const clone = gen.clone();
// 	// 		const nextResult = clone.next(apiResult).value;
// 	// 		expect(nextResult).toHaveProperty('PUT');
// 	// 		expect((nextResult as any).PUT.action).toHaveProperty('type', actionTypes.GET_ALL_LIGHTS_SUCCESS);
// 	// 	});

// 	// 	it('should put fail action', () => {
// 	// 		const clone = gen.clone();
// 	// 		if (clone.throw) {
// 	// 			const nextResult = clone.throw('error').value;
// 	// 			expect(nextResult).toHaveProperty('PUT');
// 	// 			expect((nextResult as any).PUT.action).toHaveProperty('type', actionTypes.GET_ALL_LIGHTS_FAIL);
// 	// 			expect(clone.next().done).toEqual(true);
// 	// 		} else {
// 	// 			fail('Unable to validate FAIL scenario');
// 	// 		}
// 	// 	});

// 	// 	it('should be done', () => {
// 	// 		gen.next(apiResult);
// 	// 		expect(gen.next().done).toEqual(true);
// 	// 	});
// 	// });

// 	describe('getAllLights', () => {
// 		const gen = sagas.getAllLights(getState);

// 		it('runs Saga with success', async () => {
// 			const dispatched = [];
// 			const result = runSaga(
// 				{
// 					dispatch: (action) => dispatched.push(action),
// 					getState: getState
// 				},
// 				sagas.getAllLights
// 			).done;

// 			expect(callApi).toBeCalled();

// 			const expectedResult = { entities: { lights: mockLights } };
// 			expect(dispatched).toContainEqual({ type: actionTypes.GET_ALL_LIGHTS_SUCCESS, result: expectedResult });
// 		});

// 		it('runs Saga with failure', async () => {
// 			const exception = new Error('Test Fail');
// 			callApi.mockImplementation(() => { throw (exception); });

// 			const dispatched = [];
// 			const result = runSaga(
// 				{
// 					dispatch: (action) => dispatched.push(action),
// 					getState: getState
// 				},
// 				sagas.getAllLights
// 			).done;

// 			expect(callApi).toBeCalled();

// 			expect(dispatched).toContainEqual({ type: actionTypes.GET_ALL_LIGHTS_FAIL, exception });
// 		});
// 	});

// 	describe('watchForSetLightState', () => {
// 		const gen = sagas.watchForSetLightState();

// 		it('should take action', () => {
// 			const nextResult = gen.next().value;
// 			expect(nextResult).toEqual(take(actionTypes.SET_LIGHT_STATE));
// 		});

// 		it('should call main function', () => {
// 			const nextResult = gen.next().value;
// 			expect(nextResult).toHaveProperty('CALL');
// 		});

// 		it('should loop and take action again', () => {
// 			const nextResult = gen.next().value;
// 			expect(nextResult).toEqual(take(actionTypes.SET_LIGHT_STATE));
// 		});
// 	});

// 	describe('setLightState', () => {
// 		const gen = sagas.setLightState();
// 		const payload = {
// 			id: 1,
// 			state: 'on'
// 		};

// 		it('runs Saga and turns light on', async () => {
// 			const dispatched = [];
// 			const result = runSaga(
// 				{
// 					dispatch: (action) => dispatched.push(action),
// 					getState: getState
// 				},
// 				sagas.setLightState,
// 				{ type: actionTypes.SET_LIGHT_STATE, payload }
// 			).done;

// 			expect(callApi).toBeCalled();

// 			const expectedResult = { entities: { lights: mockLights } };
// 			expect(dispatched).toContainEqual({ type: actionTypes.GET_ALL_LIGHTS_SUCCESS, result: expectedResult });
// 		});

// 		it('runs Saga with failure', async () => {
// 			const exception = new Error('Test Fail');
// 			callApi.mockImplementation(() => { throw (exception); });

// 			const dispatched = [];
// 			const result = runSaga(
// 				{
// 					dispatch: (action) => dispatched.push(action),
// 					getState: getState
// 				},
// 				sagas.getAllLights
// 			).done;

// 			expect(callApi).toBeCalled();

// 			expect(dispatched).toContainEqual({ type: actionTypes.GET_ALL_LIGHTS_FAIL, exception });
// 		});
// 	});
// });

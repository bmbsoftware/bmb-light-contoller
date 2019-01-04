import { cloneableGenerator } from 'redux-saga/utils';
import { take } from 'redux-saga/effects';
import * as sagas from 'domains/app/sagas';
import * as actionTypes from 'domains/app/actionTypes';
import * as actions from 'domains/app/actions';

describe('App sagas tests', () => {
	describe('watchForLoadAllAppSagas', () => {
		const gen = sagas.default();

		it('should fork all watcher functions', () => {
			const nextResult = gen.next().value;
			expect(nextResult).toBeDefined();
		});

		it('should be done', () => {
			const nextResult = gen.next().done;
			expect(nextResult).toEqual(true);
		});
	});

	describe('watchForLoadHubLocation', () => {
		const gen = sagas.watchForLoadHubLocation();

		it('should take action', () => {
			const nextResult = gen.next().value;
			expect(nextResult).toEqual(take(actionTypes.LOAD_LIGHT_HUB_LOCATION));
		});

		it('should call main function', () => {
			const nextResult = gen.next().value;
			expect(nextResult).toHaveProperty('CALL');
		});

		it('should loop and take action again', () => {
			const nextResult = gen.next().value;
			expect(nextResult).toEqual(take(actionTypes.LOAD_LIGHT_HUB_LOCATION));
		});
	});

	describe('loadHubLocation', () => {
		const gen = cloneableGenerator(sagas.loadHubLocation as any)();
		it('should call the api with a load light hub location action', () => {
			const nextResult = gen.next(actions.doLoadLightHubLocation()).value;
			expect(nextResult).toHaveProperty('CALL');
		});

		const apiResult = { name: 'test name' };
		it('should put success action', () => {
			const clone = gen.clone();
			const nextResult = clone.next(apiResult).value;
			expect(nextResult).toHaveProperty('PUT');
			expect((nextResult as any).PUT.action).toHaveProperty('type', actionTypes.LOAD_LIGHT_HUB_LOCATION_SUCCESS);
		});

		it('should put fail action', () => {
			const clone = gen.clone();
			if (clone.throw) {
				const nextResult = clone.throw('error').value;
				expect(nextResult).toHaveProperty('PUT');
				expect((nextResult as any).PUT.action).toHaveProperty('type', actionTypes.LOAD_LIGHT_HUB_LOCATION_FAIL);
				expect(clone.next().done).toEqual(true);
			} else {
				fail('Unable to validate FAIL scenario');
			}
		});

		it('should be done', () => {
			gen.next(apiResult);
			expect(gen.next().done).toEqual(true);
		});
	});
});

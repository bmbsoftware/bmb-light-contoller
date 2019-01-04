import reducer, { initialState } from 'domains/app/reducer';
import * as actionTypes from 'domains/app/actionTypes';

describe('App reducer tests', () => {
	it('returns the default state', () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it('returns LOAD_LIGHT_HUB_LOCATION state', () => {
		const action = { type: actionTypes.LOAD_LIGHT_HUB_LOCATION };
		expect(reducer(undefined, action)).toHaveProperty('loading', true);
	});

	it('returns LOAD_LIGHT_HUB_LOCATION_SUCCESS state', () => {
		const action = { type: actionTypes.LOAD_LIGHT_HUB_LOCATION_SUCCESS };
		expect(reducer(undefined, action)).toHaveProperty('loading', false);
	});

	it('returns LOAD_LIGHT_HUB_LOCATION_FAIL state', () => {
		const action = { type: actionTypes.LOAD_LIGHT_HUB_LOCATION_FAIL };
		expect(reducer(undefined, action)).toHaveProperty('loading', false);
	});
});

import * as actions from 'domains/app/actions';
import * as actionTypes from 'domains/app/actionTypes';
import client from '__mocks__/apiClient';

describe('App actions tests', () => {
	describe('doLoadLightHubLocation', () => {
		it('creates Action to load light hub', () => {
			const result = actions.doLoadLightHubLocation();
			expect(result).toBeDefined();
			expect(result).toEqual({
				type: actionTypes.LOAD_LIGHT_HUB_LOCATION
			});
		});
	});

	describe('loadLightHubLocation', () => {
		it('creates promise action to load light hub location', () => {
			const result = actions.loadLightHubLocation();
			expect(result.promise).toBeDefined();
			if (result.promise) {
				result.promise(new client()).then((data: string) => expect(data).toBeTruthy());
			}
		});
	});
});

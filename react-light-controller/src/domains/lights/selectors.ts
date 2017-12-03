import { createSelector } from 'reselect';
import { Light } from 'domains/lights/model';

const getLights = (state: any) => state.entities.lights;

export const getAllLights = createSelector(
	[getLights],
	(lights: any): Light[] | null => {
		const testLight: Light = {
			id: 1,
			state: {
				on: true,
				bri: 75,
				alert: 'none',
				reachable: true
			},
			swupdate: {
				state: 'great',
				lastInstall: '1234567890'
			},
			type: 'light',
			name: 'my light'
		};
		return [testLight, {...testLight, id: 2}, {...testLight, id: 3}, {...testLight, id: 4}];
	}
);
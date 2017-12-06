import _ from 'lodash';
import { createSelector } from 'reselect';
import { Light } from 'domains/lights/model';

const getLights = (state: any) => state.entities.lights;

export const getAllLights = createSelector(
	[getLights],
	(lights: any): Light[] | null => {
		const allLights = _.keys(lights).map((key) => ({...lights[key], id: key}));
		return _.orderBy(allLights, ['name'], ['asc']);
	}
);
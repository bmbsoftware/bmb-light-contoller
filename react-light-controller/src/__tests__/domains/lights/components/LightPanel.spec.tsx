import React from 'react';
import { shallow } from 'enzyme';
import { LightPanel, Props } from 'domains/lights/components/LightPanel';

const props: Props = {
	light: {
		id: 1,
		name: 'Test Light',
		state: {
			on: true
		},
		type: '',
		swupdate: {
			state: 'updated',
			lastInstall: 'recently'
		}
	},

};

it('renders without crashing', () => {
	const wrapper = shallow(< LightPanel {...props} />);
	expect(wrapper).toMatchSnapshot();
});

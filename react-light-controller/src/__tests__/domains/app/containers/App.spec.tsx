import React from 'react';
import { shallow } from 'enzyme';
import { App, Props } from 'domains/app/containers/App';

const props: Props = {
	doLoadLightHubLocation: jest.fn()
};

it('renders without crashing', () => {
	const wrapper = shallow(< App {...props} />);
	expect(wrapper).toMatchSnapshot();
});

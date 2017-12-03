import React from 'react';
import { connect } from 'react-redux';

import * as lightSelectors from 'domains/lights/selectors';
import { Light } from 'domains/lights/model';

interface Props {
	lights: Light[] | null;
}

interface State {
	loading: boolean;
}

export class Lights extends React.Component<Props, State> {
	public componentWillMount() {
		// TODO: add loading logic
	}

	public render() {
		const { lights } = this.props;
		return (
			<div>
				<h1>Lights</h1>
				<div>
					{
						lights && lights.map((light) => (
							<div key={light.id}>
								{light.name}
							</div>
						))
					}
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
			lights: lightSelectors.getAllLights(state)
		};
	}
)(Lights);

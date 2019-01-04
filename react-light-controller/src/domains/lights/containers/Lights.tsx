import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import LightPanel from 'domains/lights/components/LightPanel';

import { doGetAllLights, doSetLightState } from 'domains/lights/actions';
import * as lightSelectors from 'domains/lights/selectors';
import { Light, LightState } from 'domains/lights/model';
import { ApplicationState } from 'applicationTypes';

interface Props {
	loading: boolean;
	lights: Light[] | null;
	loadLights: typeof doGetAllLights;
	setLightState: typeof doSetLightState;
	classes: any;
}

const styles = (theme: any) => {
	return {
		lightContainer: {
			textAlign: 'left' as 'left',
			display: 'flex' as 'flex',
			flexWrap: 'wrap' as 'wrap',
			justifyContent: 'center' as 'center',
			alignContent: 'space-around' as 'space-around'
		},

		lightPanel: {
			width: '28vw',
			margin: '10px',
			padding: '4px',
			overflow: 'hidden' as 'hidden',
			whiteSpace: 'nowrap' as 'nowrap',
			textOverflow: 'ellipsis',
			display: 'flex',
			alignContent: 'center' as 'center'
		}
	};
};

export class Lights extends React.Component<Props, any> {
	public componentWillMount() {
		const { loadLights } = this.props;
		loadLights();
	}

	private toggleLight = (light: Light) => {
		const { setLightState } = this.props;
		console.log(`Toggling light ${light.state.on ? 'off' : 'on'}`);
		const lightState: LightState = {
			on: !light.state.on
		};
		setLightState(light.id, lightState);
	}

	public render() {
		const { lights, classes, loading } = this.props;
		return (
			<div>
				<div className={classes.lightContainer}>
					{
						! loading && lights && lights.map((light) => (
							<div key={light.id}>
								<LightPanel onClick={this.toggleLight} className={classes.lightPanel} light={light} />
							</div>
						))
					}
					{
						loading && <div>Loading...</div>
					}
				</div>
			</div>
		);
	}
}

const connector = connect(
	(state: ApplicationState) => {
		return {
			lights: lightSelectors.getAllLights(state),
			loading: state.domains.lights.loading
		};
	},
	{ 
		loadLights: doGetAllLights,
		setLightState: doSetLightState
	}
)(Lights);

export default withStyles(styles)(connector);

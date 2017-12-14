import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { LightHubLocation } from 'domains/lights/model';
import { doLoadLightHubLocation } from 'domains/app/actions';

interface Props {
	hub: LightHubLocation;
	loading: boolean;
	doLoadLightHubLocation: typeof doLoadLightHubLocation;
}

export class Home extends React.Component<Props, any> {
	private handleReload = () => {
		this.props.doLoadLightHubLocation();
	}

	public render() {
		const { loading, hub } = this.props;
		return (
			<div>
				<p>
					This app can be used to control lights in the <a href="#">Philips Hue Personal Wireless Lighting System</a>.
				</p>
				<Link to="/lights">
					<Button raised color="primary">Get Started</Button>
				</Link>
				<p>
					{loading && <span>Loading...</span>}
					{!loading && hub && <div>Light Hub ({hub.id}): {hub.internalipaddress}</div>}
					{!loading && !hub && <div>No Light Hub Found!!</div>}
				</p>
				<p>
					<Button raised onClick={this.handleReload}>Find Light Hub</Button>
				</p>
			</div>
		);
	}
}

export default connect(
	(state: any) => {
		return {
			hub: state.entities.lightHubLocation && state.entities.lightHubLocation[0],
			loading: state.domains.app.loading
		};
	},
	{
		doLoadLightHubLocation
	}
)(Home);

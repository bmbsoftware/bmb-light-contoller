import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
					<Button color="primary">Get Started</Button>
				</Link>
				<p>
					{loading && <span>Loading...</span>}
					{!loading && hub && <span>Light Hub ({hub.id}): {hub.internalipaddress}</span>}
					{!loading && !hub && <span>No Light Hub Found!!</span>}
				</p>
				<p>
					<Button onClick={this.handleReload}>Find Light Hub</Button>
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

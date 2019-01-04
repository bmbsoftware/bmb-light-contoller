import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

import { doLoadLightHubLocation } from 'domains/app/actions';

import Home from 'domains/app/containers/Home';
import Lights from 'domains/lights/containers/Lights';
import AppBar from 'domains/app/components/AppBar';

import 'domains/app/containers/App.css';

export interface Props {
	doLoadLightHubLocation: typeof doLoadLightHubLocation;
}

export class App extends React.Component<Props> {
	public componentWillMount() {
		if (this.props.doLoadLightHubLocation) {
			this.props.doLoadLightHubLocation();
			setInterval(this.props.doLoadLightHubLocation, 60000);
		}
	}

	public render() {
		const theme = createMuiTheme({
			palette: {
				type: 'dark',
				primary: purple
			}
		});

		return (
			<MuiThemeProvider theme={theme}>
				<Router>
					<div className="App">
						<div className="app-main">
							<Route exact path="/" component={Home} />
							<Route path="/lights" component={Lights} />
						</div>
						<div className="app-nav">
							<AppBar />
						</div>
					</div>
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default connect(
	null,
	{ doLoadLightHubLocation }
)(App);

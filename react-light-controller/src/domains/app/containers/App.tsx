import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { purple } from 'material-ui/colors';

import Home from './Home';
import Lights from 'domains/lights/containers/Lights';
import AppBar from 'domains/app/components/AppBar';

import 'domains/app/containers/App.css';

class App extends React.Component {
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
							<AppBar classes={{}} />
						</div>
					</div>
				</Router>
			</MuiThemeProvider>
		);
	}
}

export default App;

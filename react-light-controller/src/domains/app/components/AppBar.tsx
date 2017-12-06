import React from 'react';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import BottomNavigation from 'material-ui/BottomNavigation';
import BottomNavigationButton from 'material-ui/BottomNavigation/BottomNavigationButton';
import HomeIcon from 'material-ui-icons/Home';
import LightbulbOutlineIcon from 'material-ui-icons/LightbulbOutline';
import GroupIcon from 'material-ui-icons/Group';
import AutomationIcon from 'material-ui-icons/Alarm';

interface Props {
	location?: any;
	history?: any;
	classes: any;
}

interface State {
	current: number;
}

enum Locations {
	home = 1,
	lights = 2,
	groups = 3,
	automation = 4
}

const styles = (theme: any) => ({
	root: {
		width: '100%'
	}
});

class ButtonAppBar extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		const currentLocation = this.getLocation(location);
		this.state = {
			current: currentLocation
		};
	}

	public componentWillReceiveProps(nextProps: Props) {
		const { location } = nextProps;

		const currentLocation = this.getLocation(location);
		this.setState({
			current: currentLocation
		});
	}

	private getLocation = (location: any) => {
		switch (location.pathname) {
			case '/lights':
				return Locations.lights;
			default:
				return Locations.home;
		}
	}

	private handleChange = (event: any, value: number) => {
		const { history } = this.props;
		switch (value) {
			case Locations.lights:
				history.push('/lights');
				break;
			default:
				history.push('/');
		}

		this.setState({
			current: value
		});
	}

	public render() {
		const { classes } = this.props;
		const { current } = this.state;
		return (
			<div className={classes.root}>
				<BottomNavigation showLabels value={current} onChange={this.handleChange}>
					<BottomNavigationButton value={Locations.home} label="Home" icon={<HomeIcon />} />
					<BottomNavigationButton value={Locations.lights} label="Lights" icon={<LightbulbOutlineIcon />} />
					<BottomNavigationButton value={Locations.groups} label="Groups" icon={<GroupIcon />} />
					<BottomNavigationButton value={Locations.automation} label="Automation" icon={<AutomationIcon />} />
				</BottomNavigation>
			</div>
		);
	}
}

export default withRouter(withStyles(styles)(ButtonAppBar) as any);
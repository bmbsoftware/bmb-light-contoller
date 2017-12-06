import React from 'react';
import { withStyles } from 'material-ui/styles';
import LightBulbIcon from 'material-ui-icons/LightbulbOutline';

interface Props {
	isLit: boolean;
	classes: any;
}

const styles = (theme: any) => {
	return {
		on: {
			color: '#f5dd07'
		},
		off: {
			color: '#0f0f0f'
		}
	};
};

export const LightIcon = (props: Props) => {
	const { isLit, classes } = props;
	const className = isLit ? classes.on : classes.off;
	return (
		<LightBulbIcon className={className} />
	);
};

export default withStyles(styles)(LightIcon);

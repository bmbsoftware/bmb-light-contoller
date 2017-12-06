import React from 'react';
import Card, { CardHeader } from 'material-ui/Card';

import LightIcon from 'domains/app/components/LightIcon';
import { Light } from 'domains/lights/model';

interface Props {
	light: Light;
	className?: any;
	onClick?: (light: Light) => void;
}

export const LightPanel = (props: Props) => {
	const handleOnClick = () => {
		if (props.onClick) {
			props.onClick(props.light);
		}
	};

	return (
		<Card className={props.className}>
			<CardHeader
				onClick={handleOnClick}
				avatar={<LightIcon isLit={props.light.state.on} classes={{}} />}
				title={props.light.name}
			/>
		</Card>
	);
};

export default LightPanel;

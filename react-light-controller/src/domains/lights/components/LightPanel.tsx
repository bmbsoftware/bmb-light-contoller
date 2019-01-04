import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import LightIcon from 'domains/app/components/LightIcon';
import { Light } from 'domains/lights/model';

export interface Props {
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
				avatar={<LightIcon isLit={props.light.state.on} />}
				title={props.light.name}
			/>
		</Card>
	);
};

export default LightPanel;

import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
interface Props {
	url: string;
}

const Home = (props: Props) => {
	return (
		<div>
			<p>
				This app can be used to control lights in the <a href="#">Philips Hue Personal Wireless Lighting System</a>.
			</p>
			<Link to="/lights">
				<Button raised color="primary">Get Started</Button>
			</Link>
		</div>
	);
};

export default Home;

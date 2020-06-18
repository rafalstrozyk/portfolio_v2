import React from 'react';

import { NavigationBarStyle } from './NavigationBar.style';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import NavigationHeader from '../../components/Headers/NavigationHeader/NavigationHeader';

const Navigation = (props) => (
	<NavigationBarStyle open={props.open}>
		<NavigationHeader />
		<NavigationItems />
	</NavigationBarStyle>
);

export default Navigation;

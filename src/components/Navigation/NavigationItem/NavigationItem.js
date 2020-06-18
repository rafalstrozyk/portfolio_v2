import React from 'react';

import { LinkStyled } from './NavigationItem.style';

const NavigationItem = (props) => (
	<LinkStyled
		to={props.to}
		spy={props.spy}
		smooth={props.smooth}
		offset={props.offset}
		duration={props.duration}
	>
		{props.children}
	</LinkStyled>
);

export default NavigationItem;

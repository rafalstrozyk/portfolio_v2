import React from 'react';

import {HeaderStyled} from './Header.style';
import H1v1Big from '../../components/Headers/h1_v1/h1_v1_big';

const Header = () => (
	<HeaderStyled>
		<H1v1Big>
			<span>&lt;</span> Rafał Stróżyk <span>/&gt;</span>
		</H1v1Big>
		<h1>
			<span>&lt;</span> Front-end Developer <span>/&gt;</span>
		</h1>
	</HeaderStyled>
);

export default Header;

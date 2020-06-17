import React from 'react';

import {HeaderStyled} from './Header.style';
import H1v1Big from '../../components/Headers/h1_v1/h1_v1_big';
import H1v1Small from '../../components/Headers/h1_v1/h1_v1_smal';
import Image from '../../assets/images/header1.png';

const Header = () => (
	<HeaderStyled>
		<H1v1Big>
			<span>&lt;</span> Rafał Stróżyk <span>&gt;</span>
		</H1v1Big>
		<img src={Image} alt='Rafał Stróżyk' />
		<H1v1Small>
			<span>&lt;/</span> Front-end Developer <span>&gt;</span>
		</H1v1Small>
	</HeaderStyled>
);

export default Header;

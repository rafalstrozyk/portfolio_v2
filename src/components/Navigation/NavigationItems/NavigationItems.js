import React from 'react';

import { NavStyled } from './NavigationItems.style';
import NavigationItem from '../NavigationItem/NavigationItem';
import { iconsFunc } from '../../../assets/images/svg/svgIndex';

const NavigationItems = () => (
	<NavStyled>
		<NavigationItem
			id='top'
			to='sectionHeader'
			spy={true}
			smooth={true}
			offset={-65}
			duration={500}
		>
			{iconsFunc.chefUp}
		</NavigationItem>
		<NavigationItem
			to='sectionMain'
			spy={true}
			smooth={true}
			offset={-50}
			duration={500}
		>
			O mnie
		</NavigationItem>
		<NavigationItem
			to='sectionSkills'
			spy={true}
			smooth={true}
			offset={-50}
			duration={500}
		>
			Umiejętności
		</NavigationItem>
		<NavigationItem
			to='sectionProjects'
			spy={true}
			smooth={true}
			offset={-50}
			duration={500}
		>
			Projekty
		</NavigationItem>
		<NavigationItem
			to='sectionContact'
			spy={true}
			smooth={true}
			offset={-50}
			duration={500}
		>
			Kontakt
		</NavigationItem>
	</NavStyled>
);

export default NavigationItems;

import React from 'react';
import { Link } from 'react-scroll';

import { NavStyle } from './Navigation.style';

const Navigation = () => (
	<NavStyle>
		<Link
			activeClass='active'
			to='sectionMain'
			spy={true}
			smooth={true}
			offset={0}
			duration={500}
		>O mnie</Link>
		<Link
			activeClass='active'
			to='sectionSkills'
			spy={true}
			smooth={true}
			offset={0}
			duration={500}
		>Umiejętności</Link>
		<Link
			activeClass='active'
			to='sectionProjects'
			spy={true}
			smooth={true}
			offset={0}
			duration={500}
		>Projekty</Link>
		<Link
			activeClass='active'
			to='sectionHeader'
			spy={true}
			smooth={true}
			offset={0}
			duration={500}
		>Do góry</Link>
	</NavStyle>
);

export default Navigation;

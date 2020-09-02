import React from 'react';

import { FooterStyled } from './Footer.style';
import MyLogo from '../../components/Headers/NavigationHeader/NavigationHeader';
import { iconsPlatforms } from '../../assets/images/svg/svgIndex';
import NavigationItem from '../../components/Navigation/NavigationItem/NavigationItem';
import { iconsFunc } from '../../assets/images/svg/svgIndex';

const Footer = () => (
	<FooterStyled>
		<div className='nav-top'>
			<NavigationItem
				to='sectionHeader'
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				{iconsFunc.chefUp}
			</NavigationItem>
		</div>
		<div className='mini-logo'>
			<MyLogo />
		</div>
		<div className='footer-mail'>
			<a href='mailto:rafal.strozyk.biz@gmail.com'>
				rafal.strozyk.biz@gmail.com
			</a>
		</div>
		<div className='footer-nav'>
			<NavigationItem
				to='sectionMain'
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				O mnie
			</NavigationItem>
			<NavigationItem
				to='sectionSkills'
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				Umiejętności
			</NavigationItem>
			<NavigationItem
				to='sectionProjects'
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				Projekty
			</NavigationItem>
			<NavigationItem
				to='sectionContact'
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				Kontakt
			</NavigationItem>
		</div>
		<div className='footer-links'>
			<a href='/'>{iconsPlatforms.fb}</a>
			<a href='/'>{iconsPlatforms.github}</a>
		</div>

		<div className='copy'>
			&copy; 2020 Rafał Stróżyk make with <span>&#x2764;</span>.
            All Rights Reserved
		</div>
	</FooterStyled>
);

export default Footer;

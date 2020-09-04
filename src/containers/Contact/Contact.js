import React from 'react';

import SectionTitle from '../../components/Headers/h2_v1/h2_v1';
import { ContactStyled, Container } from './Contact.style';
import { iconsPlatforms, iconsFunc } from '../../assets/images/svg/svgIndex';
import file from '../../docs/file.pdf';

const ContactSection = () => (
	
	<ContactStyled id='sectionContact'>
	
		<div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
	
		<SectionTitle>Kontakt</SectionTitle>
		<Container>
			<a href='mailto:rafal.strozyk.biz@gmail.com'>
				{iconsPlatforms.mail} rafal.strozyk.biz@gmail.com
			</a>
			<a href='http://m.me/rafalreso'target="_blank" rel="noopener noreferrer">{iconsFunc.bubbleIcon} Messenger</a>
			<a href='https://github.com/rafalstrozyk'target="_blank" rel="noopener noreferrer">{iconsPlatforms.github} rafalstrozyk</a>
			<a href={file} download>
				{iconsPlatforms.portfolio} Portfolio
			</a>
		</Container>
	</ContactStyled>
);

export default ContactSection;

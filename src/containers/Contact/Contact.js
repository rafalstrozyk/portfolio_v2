import React from 'react';

import SectionTitle from '../../components/Headers/h2_v1/h2_v1';
import { ContactStyled, Container } from './Contact.style';
import { iconsPlatforms } from '../../assets/images/svg/svgIndex';

const ContactSection = () => (
	<ContactStyled>
		<SectionTitle>Kontakt</SectionTitle>
		<Container>
            <a href='mailto:rafal.strozyk.biz@gmail.com' >{iconsPlatforms.mail} rafal.strozyk.biz@gmail.com</a>
            <a href='/' >{iconsPlatforms.fb}Portfolio</a>
            <a href='/' >{iconsPlatforms.github}Facebook</a>
		</Container>
	</ContactStyled>
);

export default ContactSection;

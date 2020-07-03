import React from 'react';

import {FooterStyled} from './Footer.style';
import MyLogo from '../../components/Headers/NavigationHeader/NavigationHeader';
import {iconsPlatforms} from '../../assets/images/svg/svgIndex';

const Footer = () => (
    <FooterStyled>
        <MyLogo />
        <div>
            Copyright
        </div>
        <div>
            <a href='/'>
                {iconsPlatforms.fb}
            </a>
            <a href='/'>
                {iconsPlatforms.github}
            </a>
            <a href='/'>
                {iconsPlatforms.mail}
            </a>
        </div>
    </FooterStyled>
)

export default Footer;
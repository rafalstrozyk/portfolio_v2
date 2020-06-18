import styled from 'styled-components';
import { Link } from 'react-scroll'

const activeClass = 'activeClass';
export const LinkStyled = styled(Link).attrs({activeClass}) ` 
    font-size: 1.6rem;
    color: ${({theme}) => theme.textIconsColor};
    cursor: pointer;
    padding: 1rem;
    transition: all .4s;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;

    &:hover {
        color: ${({theme}) => theme.lightPrimaryColor};
    }

    &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #fff;
    transform: scaleX(0);
    transition: transform .2s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

    &.${activeClass} {
        color: ${({theme}) => theme.primaryColor};
         font-weight: 700;

    }
`
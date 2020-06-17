import styled from 'styled-components';

export const NavStyle = styled.nav ` 
    background: ${({theme}) => theme.darkPrimaryColor};
    padding: 1.5rem;
    position: fixed;
    width: 100%;
    z-index: 100;
` 
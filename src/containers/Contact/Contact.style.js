import styled from 'styled-components';

export const ContactStyled = styled.section `
    height: 100vh;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.textIconsColor};
    font-size: 1.8rem;

    & svg {
        fill: ${({theme}) => theme.textIconsColor};
        width: 4rem;
        height: auto;
        margin-right: 1.5rem;
    }

    h2 {
        margin: 5rem 0;
    }
`

export const Container = styled.div `
    display: flex;
    flex-direction: column;

    & > * {margin-bottom: 2.8rem;}

    & a {
        display: flex;
        align-items: center;
        color: ${({theme}) => theme.textIconsColor};
        text-decoration: none;
    }
`
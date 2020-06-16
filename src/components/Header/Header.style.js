import styled from 'styled-components';

export const HeaderStyled = styled.header `
    background-color: ${({theme}) => theme.primaryColor};
    height: 100vh;

    & h1 {
        color: ${({theme}) => theme.textIconsColor};
        font-size: 3.5rem;
    }
`
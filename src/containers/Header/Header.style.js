import styled from 'styled-components';

export const HeaderStyled = styled.header `
    background-color: ${({theme}) => theme.primaryColor};
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
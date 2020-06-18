import styled from 'styled-components';

export const H2TitleStyled = styled.h2 `
    width: max-content;
    font-size: 4.5rem;
    text-align: center;
    font-weight: 700;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: ${({theme}) => theme.primaryColor};
    background: ${({theme}) => theme.primaryTextColor};
    align-self: center;
    padding: 1.5rem 3.5rem;

    transform: skewY(-4deg);
	& > * {
		transform: skewY(4deg);
    }

    margin: 4rem 0;
`
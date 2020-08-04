import styled from 'styled-components';

export const H1Style = styled.h1`
	color: ${({ theme }) => theme.textIconsColor};
	font-size: 6.5rem;
    position: relative;
    width: max-content;

    @media only screen and (max-width: 500px) {
         font-size: 5rem;   
    }

    & span {
        color: ${({ theme }) => theme.primaryTextColor};
        font-weight: 700;
        position: absolute;
    }

    & span:first-child {
        top: 1rem;
        left: -3.8rem;
    }

    & span:last-child {
        top: -1.5rem;
        right: -3.5rem;
    }

`;

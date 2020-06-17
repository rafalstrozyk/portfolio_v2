import styled from 'styled-components';

export const H1Style = styled.h1`
	color: ${({ theme }) => theme.textIconsColor};
	font-size: 3.5rem;
    position: relative;
    width: max-content;
    font-weight: 100;

    & span {
        color: ${({ theme }) => theme.lightPrimaryColor};
        font-weight: 700;
        position: absolute;
        
    }

    & span:first-child {
        top: -.8rem;
        left: -3rem;
    }

    & span:last-child {
        top: .5rem;
        right: -2.5rem;
    }

`;

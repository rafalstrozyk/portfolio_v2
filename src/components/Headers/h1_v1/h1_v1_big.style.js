import styled from 'styled-components';

export const H1Style = styled.h1`
	color: ${({ theme }) => theme.textIconsColor};
	font-size: 5.5rem;
    position: relative;
    width: max-content;

    & span {
        color: ${({ theme }) => theme.primaryTextColor};
        font-weight: 700;
        position: absolute;
        width: 5.5rem;
        height: 5.5rem;
        

    }

    & span:first-child {
        top: .8rem;
        left: -3.8rem;
    }

    & span:last-child {
        top: -.5rem;
        right: -5.5rem;
    }

`;

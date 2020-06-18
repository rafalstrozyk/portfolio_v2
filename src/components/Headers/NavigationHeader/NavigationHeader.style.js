import styled from 'styled-components';

export const HeaderStyled = styled.div `
    color: ${({ theme }) => theme.textIconsColor};
	font-size: 1.6rem;
    position: relative;
    width: max-content;
    font-weight: 700;

    & span {
        color: ${({ theme }) => theme.lightPrimaryColor};
        font-weight: 700;
        position: absolute;
        
    }

    & span:first-child {
        top: -.5rem;
        left: -1.2rem;
    }

    & span:last-child {
        top: .5rem;
        right: -1.2rem;
    }
` 
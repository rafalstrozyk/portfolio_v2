import styled from 'styled-components';

export const NavigationBarStyle = styled.div ` 
    background: ${({theme}) => theme.primaryTextColor};
    padding: 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: space-between;

    & div {
        margin-left: 2rem;
    }

    & nav {
        margin-right: 2rem;
    }
` 
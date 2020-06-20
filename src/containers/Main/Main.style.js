import styled from 'styled-components';

export const MainSectionStyled = styled.section `
    background-color: ${({theme}) => theme.backColor};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & div {
        width: 80%;
        margin-top: 3.5rem;

        &:not(:last-child) {
            margin-bottom: 4rem;
        }

        & p {
                margin-top: 1.5rem;
                font-size: 1.9rem;
            }
    }

    padding: 4.5rem;
    
`

import styled from 'styled-components';

export const ProjectsSectionStyled = styled.section `
    background-color: ${({theme}) => theme.backColor};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h2 {
        margin: 4rem 0;
    }

    & > div {
        margin-bottom: 6rem;
    }
`
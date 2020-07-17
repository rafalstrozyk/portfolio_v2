import styled from 'styled-components';

export const ProjectsSectionStyled = styled.section `
    background-color: ${({theme}) => theme.backColor};
    height: 100%;

    & h2 {
        margin: 4rem 0;
    }

    & > div {
        margin-bottom: 6rem;
    }
`
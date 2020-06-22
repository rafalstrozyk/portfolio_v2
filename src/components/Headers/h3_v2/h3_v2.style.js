import styled from 'styled-components';

export const H3TitleStyled = styled.h3`
	font-size: 3rem;
	font-weight: 100;
	text-transform: uppercase;
	position: relative;
    color: ${({theme}) => theme.primaryTextColor};
`;

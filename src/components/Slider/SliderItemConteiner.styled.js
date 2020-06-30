import styled from 'styled-components';

export const ItemStyledConteiner = styled.div`
	min-width: 100%;
    height: 100%;
    transition: .5s;
	background: url(${props => props.img});
    background-position: center;
    background-size: cover;
    transform: translateX(${props => props.moved}%);
`;

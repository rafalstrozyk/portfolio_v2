import styled from 'styled-components';

export const ItemStyledConteiner = styled.div`
	min-width: 100%;
	height: 100%;
	transition: 0.5s;
	background: url(${(props) => props.img});
	background-position: center;
	background-size: cover;
	transform: translateX(${(props) => props.moved}%);
	position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &:hover {
        &::before {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }


	&::before {
		background-color: rgba(0, 0, 0, 0.4);
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		width: 100%;
        z-index: 1;
        transition: all .3s;
	}

`;

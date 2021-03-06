import styled from 'styled-components';

export const BurgerStyle = styled.div`

@media only screen and (min-width: 901px) {
		display: none;
	}

	position: fixed;
	top: 3%;
	left: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2.5rem;
	height: 2.5rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 200;

	& div {
		width: 2.5rem;
		height: 0.25rem;
		background: ${({ theme, open }) =>
			open ? theme.darkPrimaryColor : theme.burgerColor};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

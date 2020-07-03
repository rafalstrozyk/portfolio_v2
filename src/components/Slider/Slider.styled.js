import styled from 'styled-components';

export const SliderStyled = styled.div`
	width: 90%;
	height: 70vh;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	box-shadow: ${({theme}) => theme.boxShadowTwo};

	& button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 5%;
		height: 100%;
		background: rgba(178, 223, 219, 0.4);
		border: none;
		cursor: pointer;
		outline: none;
		transition: all 0.3s;

		& svg {
			width: 5rem;
			height: 5rem;
			fill: ${({ theme }) => theme.textIconsColor};
		}

		&:hover {
			background: rgba(178, 223, 219, 0.8);
			& svg {
				fill: ${({ theme }) => theme.primaryTextColor};
				transition: all 0.3s;
			}
		}

		&:active {
			background: rgba(0, 121, 107, 0.5);
		}
	}

	& #goLeft {
		left: 0;

		&:active {
			svg {
				transform: translateX(-1rem);
			}
		}
	}

	& #goRight {
		right: 0;
		&:active {
			svg {
				transform: translateX(1rem);
			}
		}
	}
`;

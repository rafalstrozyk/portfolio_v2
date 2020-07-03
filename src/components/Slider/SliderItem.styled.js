import styled from 'styled-components';

export const SliderItemStyled = styled.div`
	color: #fff;
	font-size: 3rem;
	background: rgba(0, 150, 136, 0.8);
	padding: 1rem;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

export const SliderItemHeader = styled.div`
	font-size: 2.2rem;
	margin-bottom: 1rem;
`;

export const SliderItemContent = styled.div`
	font-size: 1.7rem;
`;

export const SliderItemLinks = styled.div`
	& a {
		& svg {
			width: 3rem;
			height: 3rem;
			fill: ${({ theme }) => theme.primaryTextColor};
			transition: all 0.3s;
		}

		&:hover {
			& svg {
				transform: translateY(-0.2rem) scale(1.2);
			}
		}

        &:active {
            & svg {
				transform: translateY(0.2rem) scale(.8);
			}
        }
	}
`;

import styled from 'styled-components';
import image from '../../assets/images/backgroundHeader.jpg';

export const HeaderStyled = styled.header`
	background-color: ${({ theme }) => theme.primaryColor};
	background-image: linear-gradient(
			to bottom,
			rgba(0, 121, 107, 0.8),
			rgba(33, 33, 33, 0.8)
		),
		url(${image});
	background-position: center;
	background-size: cover;
	height: 100vh;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& img {
		width: 25rem;
		height: 25rem;
		box-sizing: border-box;
		border-radius: 50%;
		margin: 3rem 0;
		box-shadow: ${({ theme }) => theme.boxShadowOne};
	}
`;

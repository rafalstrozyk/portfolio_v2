import styled from 'styled-components';

export const SkillsSectionStyled = styled.section`
	background-color: ${({ theme }) => theme.primaryColor};
	height: 100%;
	padding: 4rem;

	@media only screen and (max-width: 500px) {
		padding: 0;
		min-height: 90vh;
	}

	& h2 {
		margin-bottom: 6rem;

		@media only screen and (max-width: 500px) {
			margin-top: 4rem;
		}
	}
`;

export const Container = styled.div`
	width: 80%;
	max-width: 1200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.backColor};
	transform: skewY(3deg);
	& > * {
		transform: skewY(-3deg);
	}
	padding: 5rem;
	margin: 5rem 0;
	box-shadow: ${({ theme }) => theme.boxShadowOne};

	@media only screen and (max-width: 500px) {
		width: 100%;
		padding: 2rem;
		margin: 0;
		box-shadow: none;
		background: none;
		transform: none;
		& > * {
			transform: none;
		}
	}
`;

export const Quotation = styled.p`
	width: 70rem;
	margin-bottom: 5rem;
	color: ${({ theme }) => theme.textIconsColor};
	font-style: italic;
	font-weight: 100;
	position: relative;
	text-align: center;
	@media only screen and (max-width: 500px) {
		width: 95%;
		margin-bottom: 0;
	}

	& span {
		font-size: 4rem;
		color: ${({ theme }) => theme.lightPrimaryColor};
		position: absolute;
	}

	& span:first-child {
		bottom: 40%;
		left: 2%;
		@media only screen and (max-width: 500px) {
			display: none;
		}
	}

	& span:last-child {
		top: 20%;
		right: 2%;
		@media only screen and (max-width: 500px) {
			display: none;
		}
	}
`;

export const ListContainer = styled.div`
	margin-top: 5rem;

	& h3 {
		margin-bottom: 2rem;
	}
	display: flex;
	flex-direction: column;

	& p {
		align-self: center;
		font-size: 2.5rem;
		color: ${({ theme }) => theme.primaryColor};
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	& a {
		transition: all 0.4s;
		&:not(:last-child) {
			margin-right: 2rem;
		}

		&:hover {
			transform: scale(1.3) rotate(10deg) translateY(-5px);
		}
	}

	& svg {
		width: auto;
		height: 8rem;
		margin-bottom: 2rem;

		@media only screen and (max-width: 500px) {
			height: 6rem;
		}
	}
`;

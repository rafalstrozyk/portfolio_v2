import styled from 'styled-components';

export const MainSectionStyled = styled.section`
	background-color: ${({ theme }) => theme.backColor};
	height: 100%;
	padding: 4rem;
	@media only screen and (max-width: 500px) {
		padding: 0 0 3rem 0;

		& h2 {
			margin-top: 2.5rem;
		}
	}

	& div {
		width: 80%;
		margin-top: 3.5rem;
		max-width: 1200px;

		@media only screen and (max-width: 500px) {
			width: 85%;
		}

		&:not(:last-child) {
			margin-bottom: 4rem;

			@media only screen and (max-width: 500px) {
				margin-bottom: 2.5rem;
			}
		}

		& p {
			margin-top: 1.5rem;
		}
	}
`;

import styled from 'styled-components';

export const NavStyled = styled.nav`
	@media only screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
        margin-top: 3.5rem;
	}

	& > *:not(:last-child) {
		margin-right: 1.5rem;

		@media only screen and (max-width: 900px) {
            margin-right: 0;
            margin-bottom: 2rem;
		}
	}
`;

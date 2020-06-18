import styled from 'styled-components';

export const NavigationBarStyle = styled.div`
	background: ${({ theme }) => theme.primaryTextColor};
	padding: 1.5rem;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	transition: all 0.3s;
    opacity: 1;

	@media only screen and (max-width: 900px) {
		width: max-content;
		flex-direction: column;
		justify-content: center;
        
        transform: ${({open}) => open? 'translateX(0)' : 'translateX(-100%)'};
	}

	& div {
		margin-left: 2rem;
        @media only screen and (max-width: 900px) {
			
			margin-left: 6rem;
		}
	}

	& nav {
		margin-right: 2rem;

		@media only screen and (max-width: 900px) {
			margin-right: 0;
			margin-left: 5.5rem;
		}
	}
`;

import styled from 'styled-components';

const activeClass = 'activeClass';
export const FooterStyled = styled.footer`
	background: ${({ theme }) => theme.primaryTextColor};
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-content: center;
	position: relative;

	& .footer-mail {
		transition: all 0.3s;
		&:hover {
			transform: scale(1.2);
		}
		& a {
			font-size: 1.5rem;
			text-decoration: none;
			color: ${({ theme }) => theme.primaryColor};
			transition: all 0.3s;

			&:hover {
				color: ${({ theme }) => theme.textIconsColor};
			}
		}
	}

	& .footer-links {
		margin-bottom: 1.5rem;

		& a {
            
			&:hover {
				& svg {
					fill: ${({ theme }) => theme.darkPrimaryColor};
				}
			}
		}

		& > *:not(:last-child) {
			margin-right: 2rem;
		}
		& svg {
			fill: ${({ theme }) => theme.primaryColor};
            transition: all .3s;
		}
	}

	& .copy {
		font-size: 1.1rem;
		color: ${({ theme }) => theme.secondaryTextColor};
		& span {
			color: #a83f39;
		}
        margin-bottom: 2rem;
	}

	& .nav-top {
		position: absolute;
		width: 3rem;
		height: 3rem;
		top: 15%;
		left: 88%;
		display: flex;
		align-content: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.3s;

		&:hover {
			box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.5);
		}

		background-color: ${({ theme }) => theme.darkPrimaryColor};

		a {
			position: absolute;
			top: 35%;
			transform: translate(0, -35%);
			&:after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 1px;
				background: none;
				transform: scaleX(0);
				transition: transform 0.2s ease-in-out;
			}
		}
	}

	& .mini-logo {
		margin: 1rem 0;
	}

	& .footer-nav {
		display: flex;
		flex-wrap: wrap;
		margin: 1rem 0;
		max-width: 90%;
		
		& > *:not(:last-child) {
			margin-right: 3rem;
		}
		a {
			font-size: 1.3rem;
			color: ${({ theme }) => theme.textIconsColor};
			cursor: pointer;
			font-weight: 300;
			padding: 0.5rem;
			transition: all 0.2s;
			text-transform: uppercase;
			letter-spacing: 2px;
			position: relative;

			& svg {
				fill: ${({ theme }) => theme.textIconsColor};
				transition: all 0.2s;

				&:hover {
					fill: ${({ theme }) => theme.lightPrimaryColor};
				}
			}

			&:hover {
				color: ${({ theme }) => theme.lightPrimaryColor};
			}

			@media only screen and (min-width: 901px) {
				&:after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					height: 1px;
					background: none;
					transform: scaleX(0);
					transition: transform 0.2s ease-in-out;
				}

				&:hover::after {
					transform: scaleX(1);
				}

				&.${activeClass} {
					color: ${({ theme }) => theme.textIconsColor};
					font-weight: 300;

					& svg {
						fill: ${({ theme }) => theme.primaryColor};
					}

					&:hover {
						color: ${({ theme }) => theme.lightPrimaryColor};
					}
				}
			}
		}
	}
`;

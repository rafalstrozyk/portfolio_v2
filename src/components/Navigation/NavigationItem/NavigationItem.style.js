import styled from 'styled-components';
import { Link } from 'react-scroll';

const activeClass = 'activeClass';
export const LinkStyled = styled(Link).attrs({ activeClass })`
	font-size: 1.6rem;
	color: ${({ theme }) => theme.textIconsColor};
	cursor: pointer;
	padding: 1rem;
	transition: all 0.4s;
	text-transform: uppercase;
	letter-spacing: 2px;
	position: relative;

	& svg {
		fill: ${({ theme }) => theme.textIconsColor};
		transition: all 0.4s;

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
			height: 2px;
			background: #fff;
			transform: scaleX(0);
			transition: transform 0.2s ease-in-out;
		}

		&:hover::after {
			transform: scaleX(1);
		}
	}

	&.${activeClass} {
		color: ${({ theme }) => theme.primaryColor};
		& svg {
			fill: ${({ theme }) => theme.primaryColor};
		}
		font-weight: 700;
	}
`;

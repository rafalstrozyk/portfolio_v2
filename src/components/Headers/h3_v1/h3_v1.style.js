import styled, {keyframes} from 'styled-components';

export const backgroundAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

`

export const H3TitleStyled = styled.h3`
    font-size: 3.5rem;
    font-weight: 100;
    text-transform: uppercase;
    position: relative;
    width: max-content;

	@media only screen and (max-width: 500px) {
        width: auto; 
		font-size: 2.5rem;
		font-weight: 300;
    }
    &:after {
			content: '';
			position: absolute;
			bottom: 5px;
            border-radius: 50%;
            width: 105%;
			left: 0;
			right: 0;
			height: 3px;
            background: linear-gradient(-45deg, #00796b, #b2dfdb, #009688, #fff);
	        background-size: 200% 200%;
			/* background: ${({theme}) => theme.primaryColor}; */
            animation: ${backgroundAnimation} 5s ease infinite;
			@media only screen and (max-width: 500px) {
            background: none;
			animation: none;
        }
    }
`


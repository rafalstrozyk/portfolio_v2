import styled from 'styled-components';

export const SkillsSectionStyled = styled.section`
	background-color: ${({ theme }) => theme.darkPrimaryColor};
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4rem;

	& h2 {
		margin-bottom: 6rem;
	}
`;

export const Container = styled.div`
	width: 80%;
	display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Quotation = styled.p`
	width: 50%;
	margin-bottom: 5rem;
	color: ${({ theme }) => theme.textIconsColor};
	font-style: italic;
	font-weight: 100;
    position: relative;
    text-align: center;

    & span {
        font-size: 4rem;
        color: ${({ theme }) => theme.lightPrimaryColor};
        position: absolute;
    }

    & span:first-child {
        margin-right: 1rem;
        bottom: 3rem;
        left: 1.5rem;
    }

    & span:last-child {
        margin-left: 1rem;
        top: 1.5rem;
        right: 2rem;
    }
`;

export const ListContainer = styled.div`
    background: ${({ theme }) => theme.backColor};
    padding: 3.5rem;
    border-radius: 10px;
    color: ${({ theme }) => theme.textIconsColor};
   

    ul {
        list-style: none;
        margin-top: 2rem;

        & li {
            font-size: 1.5rem;
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;  
            display: inline;
           
        }

        & svg {
            width: auto;
            height: 5rem;
        }
    }
`
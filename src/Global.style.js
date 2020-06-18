import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-weight: 300;
        
    }
    
    html {
        font-size: 62.5%; // 10px
        color: ${({theme}) => theme.primaryTextColor};

        @media only screen and (max-width: 900px) {
            font-size: 56.25%; // 9px
        }

        @media only screen and (max-width: 700px) {
            font-size: 50%; // 8px
        }

        @media only screen and (max-width: 500px) {
            font-size: 43.75%; // 7px
        }
        
    }

    body {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        line-height: 1.6;  
    }

`
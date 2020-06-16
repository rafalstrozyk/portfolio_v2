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
        font-size: 62.5%;
        color: ${({theme}) => theme.primaryTextColor};
        
    }

    body {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        line-height: 1.6;  
    }

`
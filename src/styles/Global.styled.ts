import {theme} from "./Theme";
import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
     
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    
    body {
        margin: 0;
        font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.primaryBg};
        line-height: 1.2;
    }
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    section {
        background-color: ${theme.colors.primaryBg};
        padding: 100px 0;
        
        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }

    h3 {

    }
    
    p {
        
    }
    
`


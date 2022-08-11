import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
    background-color:#FBF8F1;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    
    }
    

    a {
    color: inherit;
    text-decoration: none;
    font-family: "Skranji";

    }

    * {
    box-sizing: border-box;
    }
    
`;

export default GlobalStyle;

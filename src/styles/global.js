import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #9B65E5;
    text-rendering: optimizeLegibility!important;
    -webkit-font-smoothing: antialised!important;
  }
`;

export default GlobalStyle;

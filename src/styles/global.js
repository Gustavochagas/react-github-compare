import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

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
    font-family: sans-serif;
  }
`;

export default GlobalStyle;

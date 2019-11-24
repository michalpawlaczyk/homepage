import { createGlobalStyle } from 'styled-components';
import './normalize.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:200,300&display=swap&subset=latin-ext');
*,*::after,*::before{
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html{ 
    background: #ffffff;
    box-sizing: border-box;
    font-size: 62.5%; 
}
body {
  font-size: 1.6rem;
  font-family: "Montserrat", sans-serif;
}   
`;

export default GlobalStyle;

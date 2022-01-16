import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {

  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *, *:after, *:before {
    padding: 0;
	  margin: 0;
	  box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    /* -webkit-text-fill-color: #ffffff; */
    background: transparent;
    transition: background-color 5000s ease-in-out 0s;
  }

`;

export default GlobalStyle;

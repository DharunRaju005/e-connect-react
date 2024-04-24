import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
    margin:0;
    padding:0;
    
    /* You can also set other global styles here */
  }

  button{
    cursor:pointer;
  }
`;
export default GlobalStyles;

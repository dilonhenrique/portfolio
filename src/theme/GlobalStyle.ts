import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // [NextJS Reset]
  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    scroll-behavior: smooth;
  }
  body {
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: ${props => props.theme.colors.neutral.x000};
  }
  #__next {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    flex-shrink: 0;
  }
  // ============
  // [Dark Mode Styles]
  body.dark {
    color: #FFFFFF; 
    background-color: #111111;
  }
  // ============
  // [Reset Styles]
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .container {
    width: ${props => props.theme.breakpoints.lg}px;
    max-width: 100%;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
  }
`;


export default GlobalStyle;
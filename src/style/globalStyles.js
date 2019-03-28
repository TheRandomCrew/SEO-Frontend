import { createGlobalStyle } from 'styled-components'

/* eslint no-unused-expressions: 0 */
export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  
`
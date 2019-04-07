import { createGlobalStyle } from 'styled-components'
// based on: https://www.github.com/annazayarova
export const dayTheme = {
	bg: "white",
	text: "black",
	grey: 'rgb(185, 185, 185)',
  red: '#E04343',
  nav: '#9954BB',
  primary: '#9954BB'
};

export const nightTheme = {
	bg: "rgb(185, 185, 185)",
	text: "white",
	grey: 'white',
  red: 'white',
  nav: 'navy'
};

/* eslint no-unused-expressions: 0 */
export const GlobalStyle = createGlobalStyle`

  html,dth: 100%;
  }

  body {
    background: ${ props => props.theme.bg };
		font-family: "kotori_roseregular";
		font-smoothing: antialiased;
		font-size:15px;
		line-height:15px;
		margin: 0;
  		padding: 0;
  		text-rendering: optimizeLegibility;
	}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: ${ props => props.theme.text };
    text-decoration:none;
  }
  #root {
    height: 100%;
    width: 100%;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyles = createGlobalStyle`
html, body {
  font-size: 62.5%;
}

.app {
  font-size: 2rem;
}

*:focus {
  outline: none;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`
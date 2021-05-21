import {ThemeProvider, createGlobalStyle} from "styled-components";
import theme from "../lib/utils/theme";

const GlobalStyles = createGlobalStyle`
html,
body {
  background:${({theme})=>theme.background};
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  overflow-x:hidden;
}

* {
  box-sizing: border-box;
}
h1,h2,h3,h4,h5 {
  padding:0;
  margin:0;
}
a,
a:hover,
a:visited,
a:active {
  outline:none; 
  text-decoration:none;
}
`

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

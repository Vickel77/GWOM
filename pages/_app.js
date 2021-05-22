import {ThemeProvider, createGlobalStyle} from "styled-components";
import theme from "../lib/utils/theme";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

html,
body {
  background:${({theme})=>theme.background};
  padding: 0;
  margin: 0;
  font-family:Raleway;
  overflow-x:hidden;
}

* {
  box-sizing: border-box;
}
h1,h2,h3,h4,h5 {
  padding:0;
  margin:0;
  font-family:Raleway;
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

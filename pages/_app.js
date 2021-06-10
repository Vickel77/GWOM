import {ThemeProvider, createGlobalStyle} from "styled-components";
import SnackbarProvider from "react-simple-snackbar";
import theme from "../lib/utils/theme";
import Head from "next/head"
const GlobalStyles = createGlobalStyle`
html,
body {
  background:${({theme})=>theme.background};
  color:${({theme})=>theme.colors.primaryText};
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
      <Head>
        <title>GWOM</title>
        <meta name="description" content="Great women on Mission is a Non-Governmental Organization, here to meet the needs of less priviledge young girls" />
        <link rel="icon" href="favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
      </Head>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </ThemeProvider>
  )
}

// http://mouauhotspot.com/login?dst=http%3A%2F%2Fwww.msftconnecttest.com%2Fredirect
export default MyApp

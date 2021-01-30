import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import Menu from "../src/components/Menu/Menu";
import Head from "next/head";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = {
  colors: {
    primary: {
      light: "#ffffff",
      main: "#fafafa",
      dark: "#c7c7c7",
    },
    secondary: {
      light: "#6d6d6d",
      main: "#424242",
      dark: "#1b1b1b",
    },
  },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {router.pathname === "/" ? null : <Menu></Menu>}
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://www.iouu.com.br/hubfs/favicon.ico"
          ></link>
          <title>Dojo - IOUU</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

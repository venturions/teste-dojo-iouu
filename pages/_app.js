import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    // Deixa branco no começo
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
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

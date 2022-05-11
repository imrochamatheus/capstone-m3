import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: {
      main: "rgba(132, 19, 56, 1)",
      light: "rgba(171, 16, 58, 1)",
      dark: "rgba(48, 25, 51, 1)",
    },
    modal: {
      main: "rgba(102, 21, 54, 0.92)",
    },
    card: {
      main: "rgba(147, 17, 53, 1)",
      light: "rgba(173, 115, 55, 1)",
      dark: "rgba(123, 19, 52, 1)",
    },
    grey: {
      main: "rgba(196, 196, 196, 1)",
      light: "rgba(226, 223, 223, 1)",
      dark: "rgba(184, 183, 180, 1)",
    },
    text: {
      main: "rgba(255, 255, 255, 1)",
      secondary: "rgba(184, 183, 180, 1)",
    },
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

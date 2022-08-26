const { createTheme, responsiveFontSizes } = require("@mui/material");

const muiTheme = createTheme({
  typography: {
    fontFamily: [
      "IBM Plex Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    htmlFontSize: 10,
  },
});

const theme = responsiveFontSizes(muiTheme);

export { theme };

import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    background: {
      default: "#000",
    },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    body2: {
      fontSize: "0.75rem",
      color: "#fff",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        backgroundColor: " #000",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default theme;

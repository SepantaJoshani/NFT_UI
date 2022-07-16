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
    h2: {
      fontSize: "3.2rem",
      color: " #ffffff",
    },
    h3: {
      fontSize: "3rem",
      color: " #ffffff",
    },
    body1: {
      fontFamily: "1rem",
      color: "#fff",
    },
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

theme.typography.h2 = {
  fontSize: "1.5rem",
  "@media (min-width:768px)": {
    fontSize: "1.8rem",
  },
  "@media (min-width:1024px)": {
    fontSize: "2.2rem",
  },
};
theme.typography.body2 = {
  color:"#fff",
  fontSize: "0.75rem",
  "@media (min-width:768px)": {
    fontSize: "1rem",
  },
  
};

export default theme;

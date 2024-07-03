import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fa524f",
    },
    secondary: {
      main: "#FBAE02",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          padding: "8px 40px",
          borderRadius: "40px",
          fontWeight: 700,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
  typography: {
    body1: {
      color: "#313131"
    }
  },
});


theme.shadows[1] = "0px 5px 22px lightgray";

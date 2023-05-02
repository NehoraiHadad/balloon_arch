import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Heebo",
      "-apple-system",
      "BlinkMacSystemFont",
      "sans-serif",
    ].join(","),
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '8px',
          },
        },
      },
    },
  },
});

export default theme;

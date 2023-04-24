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
});

export default theme;

import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./Gallery.scss";

import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";

function Galleries() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <PhotoGrid />
    </ThemeProvider>
  );
}

export default Galleries;

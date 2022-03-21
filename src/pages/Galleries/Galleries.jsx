import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./Galleries.scss";

import GalleryProfileList from "../../components/GalleryProfile/GalleryProfileList";

function Galleries() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GalleryProfileList />
    </ThemeProvider>
  );
}

export default Galleries;

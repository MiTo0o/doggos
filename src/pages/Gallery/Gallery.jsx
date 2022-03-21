import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { allGalleries } from "../../utils/constants";
import { useParams } from "react-router-dom";
import "./Gallery.scss";

import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";

function Galleries() {
  let { galleryName } = useParams();
  if (allGalleries[galleryName]) {
    const darkTheme = createTheme({
      palette: {
        mode: "dark",
      },
    });
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <PhotoGrid dogData={allGalleries[galleryName]} />
      </ThemeProvider>
    );
  }
}

export default Galleries;

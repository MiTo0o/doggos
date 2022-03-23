import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { allGalleries } from "../../utils/constants";
import { useParams } from "react-router-dom";
import "./Gallery.scss";
import TopNav from "../../components/TopNav/TopNav";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";
import Home from "../Home/Home";

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
        <TopNav />
        <PhotoGrid dogData={allGalleries[galleryName]} />
      </ThemeProvider>
    );
  } else {
    return <Home />;
  }
}

export default Galleries;

import PhotoGrid from "../components/PhotoGrid";

// MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// custom components
import Home from "./Home";
import TopNav from "../components/TopNav";

import { useParams } from "react-router-dom";
import { allGalleriesData } from "../galleryData/allDogsData";

function Gallery() {
  let { galleryName } = useParams();
  galleryName = galleryName || "random";
  // make galleryName a typed key
  const typedGalleryName = galleryName as keyof typeof allGalleriesData;

  if (Object.hasOwn(allGalleriesData, galleryName)) {
    const landingPageTheme = createTheme({
      palette: {
        mode: "dark",
        background: {
          default: "#1E272C",
        },
      },
    });

    return (
      <ThemeProvider theme={landingPageTheme}>
        <CssBaseline />
        <TopNav />
        <PhotoGrid dogData={allGalleriesData[typedGalleryName]} />
      </ThemeProvider>
    );
  } else {
    return <Home />;
  }
}

export default Gallery;

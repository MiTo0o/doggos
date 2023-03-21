import { useState } from "react";

// dog gallery info
import { Brownie } from "../galleryData/Brownie";
import { Elvis } from "../galleryData/Elvis";

// material ui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

// photo gallery
import PhotoAlbum from "react-photo-album";

// light box imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import TopNav from "../components/TopNav";
function Gallery() {
  const landingPageTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#1E272C",
      },
    },
  });

  const [index, setIndex] = useState(-1);

  return (
    <ThemeProvider theme={landingPageTheme}>
      <CssBaseline />
      <TopNav />
      <Typography
        variant="h3"
        paragraph
        style={{ textAlign: "center" }}
        sx={{ my: 4 }}
      >
        {Elvis.title}
      </Typography>
      <PhotoAlbum
        photos={Elvis.imgList}
        layout="masonry"
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={Elvis.imgList}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow]}
      />
    </ThemeProvider>
  );
}

export default Gallery;

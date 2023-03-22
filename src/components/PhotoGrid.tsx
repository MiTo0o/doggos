import { useState } from "react";

// material ui
import Typography from "@mui/material/Typography";

// photo gallery
import PhotoAlbum from "react-photo-album";

// light box imports
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import { galleryDataInterface } from "../galleryData/allDogsData";

function PhotoGrid({dogData}: {dogData: galleryDataInterface}) {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <Typography
        variant="h3"
        paragraph
        style={{ textAlign: "center" }}
        sx={{ my: 4 }}
      >
        {dogData.title}
      </Typography>
      <PhotoAlbum
        photos={dogData.imgList}
        layout="masonry"
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={dogData.imgList}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow]}
      />
    </>
  );
}

export default PhotoGrid;

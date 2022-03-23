import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Typography from "@mui/material/Typography";

// https://github.com/neptunian/react-photo-gallery/issues/178
function PhotoGrid({ dogData }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Typography
        variant="h3"
        paragraph
        style={{ textAlign: "center" }}
        sx={{ my: 4 }}
      >
        {dogData.title}
      </Typography>
      <Gallery photos={dogData.imgList} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={dogData.imgList.map((imgData) => ({
                ...imgData,
                srcset: imgData.srcSet,
                caption: imgData.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default PhotoGrid;

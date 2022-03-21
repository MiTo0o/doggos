import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { lucky } from "../../assets/lucky";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function GalleryProfileList(props) {
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
      <div sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              sx={{ mr: 5 }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              {props.title}
            </Typography>
            <Button color="inherit">Home</Button>
          </Toolbar>
        </AppBar>
      </div>

      <Gallery photos={lucky} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={lucky.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default GalleryProfileList;

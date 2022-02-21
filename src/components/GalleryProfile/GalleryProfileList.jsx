import React from 'react';


import Typography from '@mui/material/Typography';

import Grid from "@mui/material/Grid";
import GalleryProfile from './GalleryProfile';

function Galleries() {
  return (
    <>
      <Typography
        variant="h3"
        paragraph
        style={{ textAlign: "center" }}
        sx={{ my: 4 }}
      >
        Projects
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <GalleryProfile/>
        <GalleryProfile/>
        <GalleryProfile/>
        <GalleryProfile/>
        <GalleryProfile/>
        <GalleryProfile/>
        <GalleryProfile/>
        <GalleryProfile/>
        <GalleryProfile/>
        <GalleryProfile/>
        <GalleryProfile/>
      </Grid>
    </>
  );
};

export default Galleries;

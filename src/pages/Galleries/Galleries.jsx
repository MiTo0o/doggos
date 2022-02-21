import React from 'react';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import './Galleries.scss';

import GalleryProfileList from '../../components/GalleryProfile/GalleryProfileList';


function Galleries() {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <GalleryProfileList />
  </ThemeProvider>
  );
};

export default Galleries;

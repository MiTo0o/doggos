import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ProfileList from "../../components/Profile/ProfileList";
import "./Profiles.scss";

function Galleries() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ProfileList />
    </ThemeProvider>
  );
}

export default Galleries;

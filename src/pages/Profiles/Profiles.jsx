import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ProfileList from "../../components/Profile/ProfileList";
import "./Profiles.scss";
import TopNav from "../../components/TopNav/TopNav";

function Galleries() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TopNav />
      <ProfileList />
    </ThemeProvider>
  );
}

export default Galleries;

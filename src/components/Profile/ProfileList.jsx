// --- Imports --- //
import React from "react";

// --- Material Ui Imports --- //
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import profileData from "../../galleryData/profileData";
import ProfileCard from "./ProfileCard";

function ProfileList() {
  return (
    <>
      <Typography
        variant="h3"
        paragraph
        style={{ textAlign: "center" }}
        sx={{ my: 4 }}
      >
        Galleries
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {profileData.map((profile) => (
          <ProfileCard profileData={profile} />
        ))}
      </Grid>
    </>
  );
}

export default ProfileList;

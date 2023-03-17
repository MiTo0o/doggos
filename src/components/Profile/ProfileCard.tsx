// --- Material Ui Imports --- //
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Link } from "react-router-dom";
import { ProfileDataInterface } from "../../galleryData/profileData";

function ProfileCard(profileData: ProfileDataInterface) {
  /* From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
  From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
  From 960px wide and above, I take up 25% of the device (4/12), so 3 columns fit the screen. */
  const galleryLink = `/gallery/${profileData.title}`;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        variant="outlined"
        style={{
          maxWidth: 600,
          backgroundColor: "#0E0D0D",
        }}
      >
        <CardMedia
          style={{
            height: "100%",
          }}
          component="img"
          image={profileData.profilePicUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {profileData.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={galleryLink} style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              endIcon={<CollectionsIcon />}
            >
              View Gallery
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default ProfileCard;

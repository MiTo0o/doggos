import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from "@mui/material/Grid";

function GalleryProfile() {
  return(
    <Grid item xs={12} sm={6} md={2}>
      <Card
        sx={{ maxWidth: 345 }}

      >
        <CardActionArea>
          <CardMedia
            component="img"
            style={{
              height: "100%",
            }}  
            image={require('./leo1.jpg')}
            alt="Leo"
          /> 
          <CardContent style={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="h2">
              Leo
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default GalleryProfile;
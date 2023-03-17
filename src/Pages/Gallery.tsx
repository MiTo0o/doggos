import PhotoAlbum from "react-photo-album";
import { Brownie } from "../galleryData/Brownie";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import CssBaseline from '@mui/material/CssBaseline';

function Gallery() {

    const landingPageTheme = createTheme({
        palette: {
          mode: 'dark',
          background: {
            default: '#1E272C'
          }
        },
      });

    return(
        <ThemeProvider theme={landingPageTheme}>
            <CssBaseline />
            <Typography
                variant="h3"
                paragraph
                style={{ textAlign: "center" }}
                sx={{ my: 4 }}
            >
                {Brownie.title}
            </Typography>
            <PhotoAlbum photos={Brownie.imgList} layout='masonry'/>
        </ThemeProvider>
    )
}

export default Gallery
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid/Grid";
import Typography from '@mui/material/Typography';

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

import { forwardRef } from "react";
// Mui custom routing becuase wrapping the "ABOUT" button with
// the LINK react-router-dom component results in weird styling ;(
const linkToHome = forwardRef((props, ref) => (
  <Link to="/" {...props} ref={ref as any} />
));


function About() {
    const landingPageTheme = createTheme({
        palette: {
          mode: "dark",
          background: {
            default: "#1E272C",
          },
        },
    });

    return(
        <ThemeProvider theme={landingPageTheme}>
            <CssBaseline />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item>
                    <Typography align="center" variant="h6" pb={3}>
                        Welcome to my dog gallery website!
                    </Typography>
                    <Typography align="center" variant="body1">
                        Here, you'll find profiles of some of the cutest furry friends that have a special place in my life.
                    </Typography>
                    <Typography align="center" variant="body1" pb={2}>
                    Each profile features a unique set of images that capture their personalities and distinct features.
                    </Typography>
                    <Typography align="center" variant="body1">
                        What makes this website personal is that every dog featured here has a special connection to me.
                    </Typography>
                    <Typography align="center" variant="body1" pb={2}>
                        They're either my own pets or dogs that I've had the privilege to spend time with and form a bond with over the years.
                    </Typography>
                    <Typography align="center" variant="body1" pb={5}>
                        I hope you enjoy browsing through the gallery and that it brings a smile to your face. Thank you for stopping by!
                    </Typography>
                </Grid>
                <Grid item>
                <Stack direction="column" spacing={3}>
                    <Link to="/galleries" style={{ textDecoration: "none" }}>
                        <Button
                        variant="outlined"
                        sx={{
                            borderRadius: 28,
                            borderColor: "#607D8B",
                            color: "#607D8B",
                        }}
                        size="large"
                        >
                        GALLERIES
                        </Button>
                    </Link>
                    <Button
                        component={linkToHome}
                        variant="outlined"
                        sx={{
                        borderRadius: 28,
                        color: "#607D8B",
                        borderColor: "#607D8B",
                        }}  
                        size="large"
                    >
                        Home
                    </Button>
                    </Stack>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default About;
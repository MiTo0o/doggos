// MUI theme
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import center from "../assets/center.svg";
import { Link } from "react-router-dom";

import { forwardRef } from "react";
// Mui custom routing becuase wrapping the "ABOUT" button with
// the LINK react-router-dom component results in weird styling ;(
const linkToAbout = forwardRef((props, ref) => (
  <Link to="/about" {...props} ref={ref as any} />
));

function Home() {
  const landingPageTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#1E272C",
      },
    },
  });

  return (
    <ThemeProvider theme={landingPageTheme}>
      <CssBaseline />
      <Stack
        mt={15}
        direction="column"
        spacing={7}
        justifyContent="center"
        alignItems="center"
        style={{ minWidth: "100vw" }}
      >
        <img src={center} alt="paw-logo" width={616} height={336} style={{overflow: 'visible'}}/>
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
            component={linkToAbout}
            variant="outlined"
            sx={{
              borderRadius: 28,
              color: "#607D8B",
              borderColor: "#607D8B",
            }}
            size="large"
          >
            About
          </Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default Home;

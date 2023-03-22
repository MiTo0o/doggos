import ProfileList from "../components/Profile/ProfileList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TopNav from "../components/TopNav";
function Galleries() {
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
      <TopNav />
      <ProfileList />
    </ThemeProvider>
  );
}

export default Galleries;

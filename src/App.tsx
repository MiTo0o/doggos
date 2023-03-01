import Grid from '@mui/material/Grid';
import paw from './assets/paw.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  
  const landingPageTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={landingPageTheme}>
      <CssBaseline />
          <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img src={paw} alt="paw-logo" xs={}/>
          <p>
            Doggos
          </p>
        </Grid>
    </ThemeProvider>

  )
}

export default App
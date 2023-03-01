import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
      <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} minHeight={160} direction='column'>
            <Grid display="flex" justifyContent="center" alignItems="center">
              <img 
                src={paw} 
                alt="paw-logo"
                style={{height: 256, width: 256}}
              />
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center">
                Doggos
            </Grid>
          </Grid>
      </Box>
    </ThemeProvider>

  )
}

export default App
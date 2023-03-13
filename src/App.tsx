import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import center from './assets/center.svg';
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
      <Stack 
        mt={15}
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <img 
          src={center} 
          alt="paw-logo"
          width={616}
          height={336}
        />
        <Stack 
          direction="column" 
          spacing={3}
        >
          <Button variant="outlined" sx={{borderRadius: 28}} size='large'>
            GALLERIES
          </Button>
          <Button variant="outlined" href="#outlined-buttons" sx={{borderRadius: 28}} size='large'>
            About
          </Button>
        </Stack>
      </Stack>

    </ThemeProvider>

  )
}

export default App
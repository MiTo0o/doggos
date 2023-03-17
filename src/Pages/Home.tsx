import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import center from '../assets/center.svg';
import { 
  ThemeProvider,
  createTheme 
} from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';


function Home() {
  
  const landingPageTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#1E272C'
      }
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
          <Link to={'gal'} style={{ textDecoration: 'none' }}>
            <Button 
              variant="outlined" 
              sx={{
                borderRadius: 28,
                borderColor: '#607D8B',
                color: '#607D8B'
              }} 
              size='large'
            >
              GALLERIES
            </Button>
          </Link>
          <Button 
            variant="outlined" 
            href="#outlined-buttons" 
            sx={{
              borderRadius: 28, 
              color: '#607D8B',
              borderColor: '#607D8B'
            }} 
            size='large'

          >
            About
          </Button>
        </Stack>
      </Stack>

    </ThemeProvider>

  )
}

export default Home
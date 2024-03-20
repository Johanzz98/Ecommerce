"use client";
import Navbar from '@/components/Navbar/Navbar';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#212121',
    },
  },    
});

export default function App (){
  return (
    <>
    <ThemeProvider theme={theme}>
     <Navbar/>
    <Container sx={{mt: 5}}>
    </Container>
    </ThemeProvider>
    </>
  );
}


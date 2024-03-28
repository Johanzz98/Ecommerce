"use client";

import Navbar from '@/components/Navbar/Navbar';
import ShoppingCart from '@/components/shoppingCart';
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

export default function page (){
  return (
    <>
      <ThemeProvider theme={theme}>
     <Navbar/>
    <Container sx={{mt: 15}}>
    <ShoppingCart/>
    </Container>
    </ThemeProvider>
      
  
    </>
  );
}


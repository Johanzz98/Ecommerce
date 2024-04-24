import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
};

const iconButtonStyle = {
  color: "white", 
};

const Footer = () => {
  return (
  
    <Box
      sx={{
        bgcolor: '#111',
        color: '#7e7e7e',
        py: 3,
        borderTop: '1px solid',
        mt: 'auto',
      }}
    >
      <Grid item xs={6} sm={3} md={2} mb={2}>
        <Grid container justifyContent="center"> 
          <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook} style={iconButtonStyle}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter} style={iconButtonStyle}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram} style={iconButtonStyle}>
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Box mb={4}>
        <form>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
              <Typography variant="body1" color="White">
                <strong>Sign up for our newsletter</strong>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email address"
                variant="outlined"
                size="small"
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{ style: { color: 'white' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" type="submit">
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      <Container>
        <Grid container spacing={1} justifyContent="space-between"> 
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="White" gutterBottom>
              Ayuda
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }} >
              Centro de Ayuda
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }} >
              Terminos y Condiciones
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="White" gutterBottom>
              Acerca de nosotros 
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }}>About Us</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }}>Careers</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }}>Deliverys Information</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }}>Privacy Policy</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }}>Terms of Service</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="White" gutterBottom>
              Cuenta
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }}>Mi cuenta </Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }}>Guía de tallas</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }}>Ver Carro</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }}>My Wishlist</Link>
            <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', '&:hover': { color: '#ffff' } }}>Retiro</Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
    
  );
};

export default Footer;

import React from 'react';
import { Box, CardContent, Grid, Hidden, Typography } from '@mui/material';

const foto = {
 maxWidth: "100%",
 height: "auto",
 margin: "20px auto",
 padding: "5px",
 marginTop: "20px"
};

const setMidIz = {
 fontFamily: "Nunito Sans, sans-serif",
 fontOpticalSizing: 'auto',
 fontWeight: 600,
 margin: "0 0 0 2rem",
 fontSize: "24px",
 fontStyle: 'normal',
 fontVariationSettings: '"wdth" 125, "YTLC" 540'
};

export default function LastPhoto() {
 return (
    <Grid container spacing={2}>
      {/* Para pantallas extra pequeñas y pequeñas, ocupa 6 columnas */}
      <Grid item xs={12} sm={6}>
        <Box style={foto}>
          <CardContent>
            <img
              src="https://i.pinimg.com/564x/86/c3/e5/86c3e55d6542f52cd680b19f4724e65e.jpg"
              srcSet="https://i.pinimg.com/564x/86/c3/e5/86c3e55d6542f52cd680b19f4724e65e.jpg 2x"
              loading="lazy"
              alt="Image 1"
              style={{ width: '100%', height: 'auto' }} // Asegura que la imagen se ajuste al contenedor
            />
            <Typography style={setMidIz}>
              StreetWears Infinite Pro
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      {/* Para pantallas medianas o mayores, muestra este elemento */}
      <Hidden smDown>
        <Grid item xs={12} sm={6}>
          <Box style={foto}>
            <CardContent>
              <img
                src="https://i.pinimg.com/564x/af/49/a6/af49a67638db8f92fb764e7f9552a62b.jpg"
                srcSet="https://i.pinimg.com/564x/af/49/a6/af49a67638db8f92fb764e7f9552a62b.jpg 2x"
                loading="lazy"
                alt="Image 2"
                style={{ width: '100%', height: '800' }} // Asegura que la imagen se ajuste al contenedor
              />
              <Typography style={setMidIz}>
                Supreme
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Hidden>
    </Grid>
 );
}

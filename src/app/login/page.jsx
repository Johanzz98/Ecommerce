import * as React from 'react';
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

//icons
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import SettingsIcon from '@mui/icons-material/Settings';
import DoneIcon from '@mui/icons-material/Done';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const sidePanelTittle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '15px 20px',
    maxWidth: 'md',
    position: 'relative', 
};

const sidePanelAccount = {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '15px 20px',
    maxWidth: 'md',
    position: 'relative', 
};


const cuadro ={

    display: 'flex',
    width: '100%',
    backgroundColor: 'white',
    color: 'inherit',
    border: '2px solid #9e9e9e', 
     marginTop: '20px', 
     cursor: 'pointer',
     textDecoration: 'none',
     alignItems: 'center',
    
};


export default function Login() {
    return (
        <Box> {/* Box principal */}
            <Container sx={sidePanelTittle}>
                <Box>
                    <Typography variant="h4">
                        Hola Johan
                    </Typography>
                </Box>
                <IconButton sx={{ position: 'absolute', right: 25 }}>
                    <CloseIcon style={{color: 'black'}} />
                </IconButton>
            </Container>

            <Box>



            </Box>

            {/* Añade un Box con margen superior para separar los contenedores */}
            <Box sx={{ marginTop: '20px' }}>
                <Container sx={sidePanelAccount}>
                    <Box>
                        <Typography variant="h4">
                            Ir a tu Cuenta
                        </Typography>
                    </Box>
                    <IconButton>
                        <EastIcon style={{color: 'black'}} />
                    </IconButton>
                </Container>
            </Box>

            {/* Añade otro Box con margen superior para separar los contenedores */}
            <Box sx={{ marginTop: '20px' }}>
                <Container sx={sidePanelAccount}>
                    <Box>
                        <Typography variant="h4">
                            Configuración
                        </Typography>
                    </Box>
                    <IconButton>
                        <SettingsIcon style={{color: 'black'}} />
                    </IconButton>
                </Container>
            </Box>

            {/* Añade otro Box con margen superior para separar los contenedores */}
            <Box sx={{ marginTop: '20px' }}>
                <Container sx={sidePanelAccount}>
                    <Box>
                        <Typography variant="h4">
                            Salir
                        </Typography>
                    </Box>
                    <IconButton>
                        <EastIcon style={{color: 'black'}} />
                    </IconButton>
                </Container>
            </Box>


        <Container sx={cuadro}>
        <Grid container>
            <Grid item xs={12}
            sm={6}
            >

                            
                            <p>
                                <strong>Tus beneficios instantáneos</strong>
                            </p>
                           
                         <Grid container alignItems="center">
                        <Grid item>
                            <DoneIcon />
                        </Grid>
                        <Grid item>
                            <p>Puntos Cordova con tu pedido</p>
                        </Grid>
                    </Grid>

                    <p>
                        Descubre más sobre el programa aquí
                        <EastIcon />
                    </p>

                </Grid>
            </Grid>
        </Container>
        </Box>
        
);
}
import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const LoginDrawerMax = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={handleDrawerOpen} // Abre el Drawer al hacer clic en el botón
      >
        <AccountBoxIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen} // Estado de apertura controlado por isDrawerOpen
        onClose={handleDrawerClose} // Cierra el Drawer al hacer clic fuera de él
        variant={isSmallScreen ? "temporary" : "permanent"}
        ModalProps={{
          keepMounted: true, // Mejora el rendimiento en pantallas móviles
        }}
        PaperProps={{ style: { width: 400 } }} // Ancho del Drawer en dispositivos pequeños
      >
        <Box p={2} textAlign="center" role="presentation">
          <IconButton onClick={handleDrawerClose}> {/* Cierra el Drawer al hacer clic en el IconButton */}
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Johan Cordova
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default LoginDrawerMax;

import React, { useEffect, useState } from "react";
import { Drawer, Box, Typography, IconButton,Paper } from "@mui/material"
import  Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CasesIcon from '@mui/icons-material/Cases';
import CartItems from "../Cart/CartItems";
import { TYPES } from '@/actions/ShoppingActions';
import {useSelector, useDispatch} from "react-redux"


const Drawers = () => {
  const  dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart );



  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const clearCart = () => {
    dispatch({type:TYPES.CLEAR_CART})
  };
  const delFromCart = (id, all= false) => {
    
    if(all){
      dispatch({type: TYPES.REMOVE_ALL_FROM_CART,payload:id})
    }else{
      dispatch({type: TYPES.REMOVE_ONE_FROM_CART,payload:id})
    }
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
        <CasesIcon />
      </IconButton>
      <Drawer
  anchor="right"
  open={isDrawerOpen}
  onClose={handleDrawerClose}
  variant="temporary"
  ModalProps={{
    keepMounted: true,
  }}
  PaperProps={{ style: { width: 720 } }} // Ajusta el ancho del Drawer
>
  <Box p={2} position="relative" role="presentation">
    <IconButton
      onClick={handleDrawerClose}
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <ArrowBackIcon />
    </IconButton>
    <Typography variant="h3" sx={{ textAlign: 'center' }}>Filtrar</Typography>
    <Grid container justifyContent="center" alignItems="center" spacing={3} >
      <Grid item>
        <Button variant="contained" color="secondary" onClick={clearCart} style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>Limpiar carrito</Button>
      </Grid>
    </Grid>
    <Box>
      {cart.map((item, index) => (
        <CartItems key={index} data={item} delFromCart={delFromCart}/>
      ))}
    </Box>
  </Box>
</Drawer>
    </>
  );
};

export default Drawers;

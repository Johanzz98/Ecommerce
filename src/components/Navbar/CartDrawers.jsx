import React, { useEffect, useState } from "react";
import { Drawer, Box, Typography, IconButton,Paper } from "@mui/material"
import  Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CasesIcon from '@mui/icons-material/Cases';
import CartItems from "../Cart/CartItems";
import { TYPES } from '@/actions/ShoppingActions';
import {useSelector, useDispatch} from "react-redux"


const CartDrawers = () => {
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
        open={isDrawerOpen} // Estado de apertura controlado por isDrawerOpen
        onClose={handleDrawerClose} // Cierra el Drawer al hacer clic fuera de él
        variant="temporary" // Cambia la variante a "temporary" para que se cierre automáticamente al hacer clic fuera de él
        ModalProps={{
          keepMounted: true, // Mejora el rendimiento en pantallas móviles
        }}
        
      >
        <Box p={2.5} textAlign="center" role="presentation">
          <IconButton onClick={handleDrawerClose}> 
            <ArrowBackIcon />
          </IconButton>
          <Grid container spacing={2}>
     
      <Grid item xs={12} sm={6} md={6}>
        <Typography variant="h3"    sx={{marginBottom:'15px'}} >Carro de Compras</Typography>
        <Box>
          <Button variant="contained" color="secondary" onClick={clearCart} 
         
          >Limpiar carrito</Button>
          {
            cart.map((item, index) => ( <CartItems key={index} data={item} delFromCart={delFromCart}/>))
          }
        </Box>
      </Grid>
    </Grid>
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawers;

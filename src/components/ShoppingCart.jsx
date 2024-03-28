import React, { useReducer, useEffect, useState } from 'react';
import { ShoppingInitialState, ShoppingReducers } from '@/redurcers/ShoppingReducers';
import ProductItem from './ProductItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CartItems from './CartItems';
import { TYPES } from '@/actions/ShoppingActions';

// Estilos


// Lógica
const ShoppingCart = () => {
  const [state, dispatch] = useReducer(ShoppingReducers, ShoppingInitialState);
  const { products, cart } = state;


  useEffect(() => {
    const ShoppingCartLS = JSON.parse(localStorage.getItem('ShoppingCarrito')) ?? [];
    if (ShoppingCartLS.length > 0) {
      // Actualizar el carrito en el estado solo si hay elementos en el localStorage
      dispatch({ type: TYPES.SET_CART_FROM_STORAGE, payload: ShoppingCartLS });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ShoppingCarrito', JSON.stringify(state.cart));
  }, [state.cart]);


  const addToCart = (id) => {
    dispatch({type:TYPES.ADD_TO_CART, payload: id});
  };
  const delFromCart = (id, all= false) => {
    
      if(all){
        dispatch({type: TYPES.REMOVE_ALL_FROM_CART,payload:id})
      }else{
        dispatch({type: TYPES.REMOVE_ONE_FROM_CART,payload:id})
      }
  };


  const clearCart = () => {
    dispatch({type:TYPES.CLEAR_CART})
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <Typography variant='h2' >Carrito de compras</Typography>
        <Typography variant='h3'>Productos</Typography>
        <Paper >
          {products.map((product) => (
            <ProductItem key={product.id} data={product} addToCart={addToCart} />
          ))}
        </Paper>
      </Grid> 
      <Grid item xs={12} sm={6} md={6}>
        <Typography variant="h3" >Carrito 211</Typography>
        <Paper>
          <button onClick={clearCart}>Limpiar carrito</button>
          {
            cart.map((item, index) => ( <CartItems key={index} data={item} delFromCart={delFromCart}/>))
          }
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ShoppingCart;

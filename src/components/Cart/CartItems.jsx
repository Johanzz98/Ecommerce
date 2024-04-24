import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { TYPES } from '@/actions/ShoppingActions';
import { useDispatch } from "react-redux";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { talla } from "../Carousel/LastCarouselItem";

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const styleBox = {
  padding: '1rem',
  margin: '2rem',
  boxShadow: '0 0 1rem #00000025, 0 0 10px rgba(0, 0, 0, 0.2)', // Efecto difuminado en el borde
  color: 'black',
  borderRadius: '30px',
  border: '2px  #000000', // Borde oscuro
  paddingTop: '20px',
  paddingBottom: 0
};

const cart = {
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  marginBottom: '12px'

};

const fontName = {
  fontFamily: "'Arimo', sans-serif",
  fontOpticalSizing: 'auto',
  fontSize: '16px',
  fontWeight: 600,
  fontStyle: 'normal',
  marginBottom: '12px'
};

const fontDescription = {
  color: '#707072',
  fontSize: '12px',
  marginBottom: '12px'
};

const sTalla= {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center', 
  
};

const column = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '-10px'
};

const lastIconsBox = {
  display: 'flex', 
 
  marginTop: '-46px'  // Ajustamos el valor para que el borde inferior suba
};

const CartItems = ({ data, delFromCart }) => {
  const { id, name, price, quantity, imageurl, description} = data;
  
  const dispatch = useDispatch();
  const [tallaSeleccionada, setTallaSeleccionada] = useState(talla.length > 0 ? talla[0] : '');
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(quantity);

  useEffect(() => {
    setCantidadSeleccionada(quantity);
  }, [quantity]);

  useEffect(() => {
    // Cargar el valor de tallaSeleccionada desde el localStorage
    const savedTalla = localStorage.getItem(`ShoppingCarrito-${id}`);
    if (savedTalla) {
      setTallaSeleccionada(savedTalla);
    }
  }, [id]); // Dependencia en id para asegurar que se ejecute solo al montar el componente
   

  const handleChangeTalla = (event) => {
    const tallaValue = event.target.value;
    setTallaSeleccionada(tallaValue);
    dispatch({ type: TYPES.ADD_TALLA, payload: { id, talla: tallaValue } });
    // Guardar el valor de tallaSeleccionada en el localStorage
    localStorage.setItem(`ShoppingCarrito-${id}`, tallaValue);
  };
  
  const handleChangeCantidad = (event) => {
    const newValue = event.target.value;
    setCantidadSeleccionada(newValue >= 1 ? newValue : 1);
    dispatch({ type: TYPES.QUANTITY, payload: { id, quantity: newValue } });
  };

  return (
    <Box sx={styleBox}>
      <Grid container>
        <Grid item xs={12} md={3.5}>
          <img src={imageurl} alt={name} style={cart} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={column}>
            <Typography variant="h4" sx={fontName}>
              {name}
            </Typography>
            <Typography variant="body1" sx={fontDescription}>
              {description}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1rem', marginTop: '5px' }}>
              <Box sx={sTalla}>
                <Typography variant="h7" sx={{marginRight:'12px'}}>Selecciona una talla:</Typography>
                <FormControl sx={{ minWidth: 75, height: 30 }}>
                  <InputLabel id="talla-label">Talla</InputLabel>
                  <Select
                    labelId="talla-label"
                    id="talla"
                    value={tallaSeleccionada}
                    label="Talla"
                    onChange={handleChangeTalla}
                  >
                    {talla.map((tallaItem) => (
                      <MenuItem key={tallaItem} value={tallaItem}>
                        {tallaItem}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '-1rem' }}>
                <Typography sx={{marginBottom:'25px'}}> Quantity</Typography>
                <TextField 
                  type="number"
                  value={cantidadSeleccionada}
                  onChange={handleChangeCantidad}
                  variant="outlined"
                  sx={{ width: '60px', fontSize: '12px', marginLeft: '1rem' }}
                  InputProps={{ style: { color: 'black', height: 25, marginTop: '-6px', marginBottom: '1rem', marginLeft:'2px' } }}
                  inputProps={{ min: 1 }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={lastIconsBox}>
            <Box sx={{mt:4, mr:6}} >
            <FavoriteBorderIcon sx={{mr: 1,  fontSize: '24px'}} />
            <ClearIcon variant="contained" color="secondary" onClick={() => delFromCart(id)} sx={{ fontSize: '24px'}}>
              Eliminar
            </ClearIcon>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ position: 'relative'}}>
  <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', top: '5px', right: '0', marginTop: '-2.5rem', marginRight: '1rem' }}>
  <Typography variant="h6" sx={{marginRight:'1rem'}}>${(price * cantidadSeleccionada).toFixed(3)}</Typography>

        <DeleteSweepIcon variant="contained" color="secondary" onClick={() => delFromCart(id, true)} sx={{ fontSize: '21px' }}>
          Eliminar Todos
        </DeleteSweepIcon>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItems;

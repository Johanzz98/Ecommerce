import React, { useReducer } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ShoppingInitialState, ShoppingReducers } from "@/services/redurcers/ShoppingReducers";

import { TYPES } from "@/actions/ShoppingActions";
import {useSelector, useDispatch} from "react-redux"

const cardStyle = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  maxWidth: "400px",
  margin: "0 auto 32px",
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: "12px",
};

const mediaStyle = {
  height: "300px",
  width: "100%",
};

const priceStyle = {
  color: "#111",
  fontSize: "22px"
};

const buttonStyle = {
  border: "none",
  outline: "0",
  padding: "12px",
  color: "white",
  backgroundColor: "#000",
  textAlign: "center",
  cursor: "pointer",
  width: "100%",
  fontSize: "18px"
};

const productContainerStyle = {
  margin: "0 10px", 
};



export default function ProductMid(props) {
  const  dispatch = useDispatch();
const addToCart = (props) => {
 dispatch({type:TYPES.ADD_TO_CART, payload: props.item});
};


  return (
    <div style={productContainerStyle}>
      <Card sx={cardStyle}>
        <CardMedia
          component="img"
          image={props.item.imageurl}
          alt="product image"
          sx={mediaStyle} 
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.item.name}
          </Typography>
          <Typography sx={priceStyle}>
            ${props.item.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
         
          <Button variant="contained" sx={buttonStyle} onClick={() => addToCart(props)}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

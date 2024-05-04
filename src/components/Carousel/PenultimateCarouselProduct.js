import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { TYPES } from "@/actions/ShoppingActions";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from "@mui/material";

const cardStyle = {
  maxWidth: "600px",
  margin: "0 auto 32px",
 
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: " 12px",
  transition: "transform 0.6s ease",
};

const cardStyle2 = {
  width: "400px",
  margin: "0 auto 12px",
  textAlign: "center",
  fontFamily: "arial",
  borderRadius: "12px",
  transition: "transform 0.6s ease",
};

const mediaStyle = {
 
  width: "100%",
  objectFit: 'contain',
};

const smallMediaStyle = {
  height: "100%",
  width: "100%",
  objectFit: 'contain',
};

const priceStyle = {
  color: "#111",
  fontSize: "22px",
  textAlign: "center",
  margin:'2px'
};

const descriptionStyle={
  fontSize: "12px",
  color: "grey",
 
  border: "none",
  fontWeight: 600,
  textAlign: "center",
  fontFamily: " 'Helvetica', sans-serif",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  margin: "2px ",
}

const buttonStyle = {
  border: "none",
  outline: "0",
  padding: "12px",
  marginTop:'8px',
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

export default function PenultimateCarousel(props) {
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const [isHovered, setIsHovered] = useState(false);

  const addToCart = () => {
    dispatch({type: TYPES.ADD_TO_CART, payload: props.item});
    dispatch({type: TYPES.TOTAL});
  };

  return (
    <Box
      style={productContainerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card sx={isSmallScreen ? cardStyle2 : cardStyle} style={{ transform: isHovered ? "scale(1.03)" : "scale(1)" }}>
        <CardMedia
          component="img"
          image={props.item.imageurl}
          alt="product image"
          sx={isSmallScreen ? smallMediaStyle : mediaStyle}
        />
        {isHovered && (
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.item.name}
            </Typography>
            <Typography sx={priceStyle}>
              ${props.item.price}
            </Typography>
            <Typography sx={descriptionStyle}  variant="body2" color="text.secondary">
              {props.item.description}
            </Typography>
            <Button variant="contained" sx={buttonStyle} onClick={addToCart}>
              Add to Cart
            </Button>
          </CardContent>
        )}
      </Card>
    </Box>
  );
}

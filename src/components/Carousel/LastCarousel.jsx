import  Box  from '@mui/material/Box'
import  Button  from '@mui/material/Button'
import  Typography  from '@mui/material/Typography'
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import LastCarouselProduct from "./LastCarouselProduct";
import { productData,  responsive} from "./LastCarouselItem";

const setMid = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Nunito Sans, sans-serif",
  fontOpticalSizing: 'auto',
  fontWeight: 1000,
  fontSize: "24px",
  fontStyle: 'normal',
  fontVariationSettings: '"wdth" 125, "YTLC" 540'
  
};


 const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '60px', 
  marginBottom: '30px',
};

const buttonStyle= {
  outline: "0",
  padding: "8px 30px", 
  color: "white",
  backgroundColor: "#000",
  borderRadius: "20px",
  cursor: "pointer",
  fontSize: "16px", 
  
  
};

function LastCarousel() {
  const product = productData.map((item, index) => (
    <LastCarouselProduct
    item={item}
    key={index}
    />
      ));


  return (
    <> 


            <Box sx={{mb:4}}>    
                <Typography style={setMid}> Fortaleza en todos sus ángulos.</Typography>
            </Box>
            <Box sx={buttonContainerStyle}>
                <Button variant="contained" sx={buttonStyle}>
                    Comprar
                </Button>
                <Button variant="contained"sx={buttonStyle}> Ver más</Button>
            </Box>

      <Box>
        <Carousel   responsive={ responsive} infinite>
          {product}
        </Carousel>
      </Box>

     
    
      
    </>
  );
}

export default LastCarousel;

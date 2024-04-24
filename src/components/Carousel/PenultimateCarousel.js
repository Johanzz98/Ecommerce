import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import PenultimateCarouselProduct from "./PenultimateCarouselProduct";
import { productData,  responsive } from "./PenultimateCarouselItem";

const setMidIz = {
  margin: "12px 3rem 12px",
 
   fontFamily: "Nunito Sans, sans-serif",
   fontOpticalSizing: 'auto',
   fontWeight: 1000,
   fontSize: "28px",
   fontStyle: 'normal',
   fontVariationSettings: '"wdth" 125, "YTLC" 540'
 };

function PenultimateCarousel() {
  const product = productData.map((item, index) => (
    <PenultimateCarouselProduct
    item={item}
    key={index}
    />
      ));

    
  return (
    <> 
<Box>    
                <Typography style={setMidIz}> NEW COLLECTION</Typography>
            </Box>

      <Box>
        <Carousel   responsive={ responsive} infinite>
          {product}
        </Carousel>
      </Box>

      
    
      
    </>
  );
}

export default PenultimateCarousel;

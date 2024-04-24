import React, { useState } from 'react';
import { Box, Typography, Grid, useMediaQuery, Hidden } from '@mui/material';
import { productData } from "../Carousel/MidItem";
import ProductMid from '../Carousel/ProductMid';
import Header from './Header';

function Products() {
    const [showDashboardIcon, setShowDashboardIcon] = useState(false);
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const handleIconChange = (newShowDashboardIcon) => {
        if (isSmallScreen) {
            setShowDashboardIcon(newShowDashboardIcon);
        }
    };

    const productCards = productData.map((item, index) => (
    
        <Grid item xs={showDashboardIcon && isSmallScreen ? 6 : 12} sm={showDashboardIcon && isSmallScreen ? 6 : 12} md={showDashboardIcon && isSmallScreen ? 12 : 4} key={index}>
            <ProductMid key={index} item={item} />
            </Grid>
       
        
    ));

    return (
        <> 
            <Hidden mdUp>
                <Header onIconChange={handleIconChange} />
            </Hidden>
            <Box>
                <Grid container spacing={4}>
                    {productCards}
                </Grid>
            </Box>
        </>
    );
}

export default Products;

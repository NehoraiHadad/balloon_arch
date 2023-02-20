import './Products.css';
import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import Images from '../Images/Images';

const Products = () => {
  return (
    <Grid container justifyContent="flex-end" alignItems="center" spacing={3} paddingRight={3} paddingBottom={3} marginTop={0} marginLeft={0} width={'100%'} style={{ backgroundColor: '#f5f5f5' }}>
      {[1, 2, 3, 4, 5, 6].map((product) => (
        <Grid className='card-container' item key={product} paddingLeft={0} paddingTop={0}>
          <ProductCard 
            image={Images.product1}
            title="Lizard"
            description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            price={300}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;

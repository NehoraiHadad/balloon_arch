import React from 'react';
import { Grid } from '@mui/material/';
import ProductCard from '../ProductCard/ProductCard';
import styled from 'styled-components';

const ProductsContainer = styled(Grid)`
  background-color: #f5f5f5;
`;

const Products = () => {
  return (
    <ProductsContainer container justifyContent="flex-end" alignItems="center" spacing={3} paddingRight={3} marginTop={0} marginLeft={0} width={'100%'} >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid item key={item} paddingLeft={0} paddingTop={0}>
          <ProductCard />
        </Grid>
      ))}
    </ProductsContainer>
  );
};

export default Products;

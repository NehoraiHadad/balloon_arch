import "./Products.css";

import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { CartContext } from "../Context/ContextCart/ContextCartProvider";
import ProductCard from "../ProductCard/ProductCard";
import AllProductObjects from "../AllProductsObjects";
import Categories from "../Categories/Categories";

const Products = () => {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <Grid
      className="products-container"
      container
      justifyContent="flex-end"
      alignItems="center"
      spacing={3}
      paddingRight={3}
      paddingBottom={3}
      marginTop={0}
      marginLeft={0}
      width={"100%"}
    >
      <Categories/>
      {AllProductObjects.map((product) => (
        <Grid
          className="card-container"
          item
          key={product.id}
          paddingLeft={0}
          paddingTop={0}
          position={"relative"}
        >
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;

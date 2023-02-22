import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ProductCard = ({ image, title, description, price, onAddToCart }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{justifyContent: 'space-between'}}>
        <Button size="small" color="primary" onClick={onAddToCart}>
          הוסף לסל
        </Button>
        <Typography variant="h6">{price}₪</Typography>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';

const ProductCard = ({ image, title, description, price, onAddToCart }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardActionArea onClick={handleOpen}>
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent>
            <Typography
              gutterBottom
              textAlign={'right'}
              variant="h6"
              fontWeight={500}
              component="div"
              sx={{ direction: 'rtl' }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              textAlign={'right'}
              fontWeight={300}
              color="text.secondary"
              sx={{ direction: 'rtl' }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'space-between', padding: '8px 16px' }}>
          <Button size="small" color="primary" onClick={onAddToCart}>
            הוסף לסל
          </Button>
          <Typography fontWeight={400} variant="h6">{price}₪</Typography>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={handleClose} sx={{backgroundImage:'linear-gradient(to left, rgba(238,130,238,0.3), rgba(75,0,130,0.3), rgba(0,0,255,0.3), rgba(0,128,0,0.3), rgba(255,255,0,0.3), rgba(255,0,0,0.3))', bgcolor: 'none'}}>
        <DialogTitle sx={{textAlign:'center'}}>{title}</DialogTitle>
        <DialogContent>
          <CardMedia component="img" image={image} alt={title} sx={{maxWidth: '650px', maxHeight: '75vh'}} />
        </DialogContent>
      </Dialog>
    </>
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

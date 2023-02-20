import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 300,
  },
}));

function Cart() {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [open, setOpen] = useState(false);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setTotalCost(totalCost + item.price);
  };

  const handleRemoveFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      existingItem.quantity -= 1;
      setCartItems([...cartItems]);
    }
    setTotalCost(totalCost - item.price);
  };

  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <ShoppingCartIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className={classes.drawer}>
          <Typography variant="h5" gutterBottom>
            Your Cart
          </Typography>
          {cartItems.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            <List>
              {cartItems.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <React.Fragment>
                        <Typography component="span" variant="body2" color="textSecondary">
                          Quantity: {item.quantity}
                        </Typography>
                        <Typography component="span" variant="body2" color="textSecondary">
                          Price: ${item.price.toFixed(2)}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </ListItem>
              ))}
              <Typography variant="h6" gutterBottom>
                Total cost: ${totalCost.toFixed(2)}
              </Typography>
              <button>Checkout</button>
            </List>
          )}
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default Cart;

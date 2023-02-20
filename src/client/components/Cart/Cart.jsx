import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 300,
}));

function Cart() {
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
    <>
      <IconButton onClick={() => setOpen(true)}>
        <ShoppingCartIcon />
      </IconButton>
      <StyledDrawer anchor="right" open={open} onClose={() => setOpen(false)}>
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
                    <>
                      <Typography component="span" variant="body2" color="textSecondary">
                        Quantity: {item.quantity}
                      </Typography>
                      <Typography component="span" variant="body2" color="textSecondary">
                        Price: ${item.price.toFixed(2)}
                      </Typography>
                    </>
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
      </StyledDrawer>
    </>
  );
}

export default Cart;

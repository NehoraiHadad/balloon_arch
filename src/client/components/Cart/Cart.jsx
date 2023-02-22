import { useState, useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import { Badge } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {CartContext} from '../Context/ContectCart/ContextCartProvider';


function Cart() {
  const {cartItems, setCartItems, totalCost, setTotalCost} = useContext(CartContext);
  const [open, setOpen] = useState(false);

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
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon sx={{color: 'black'}} />
      </Badge>
    </IconButton>

      <Drawer dir='rtl' anchor="right"  open={open} onClose={() => setOpen(false)}
        PaperProps={{
          style:{
            width:'20vw'
          }
        }}>
        <Typography variant="h5" gutterBottom dir='rtl'>
          העגלה שלך
        </Typography>
        {cartItems.length === 0 ? (
          <Typography>העגלה ריקה.</Typography>
        ) : (
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textSecondary">
                        כמות: {item.quantity}
                      </Typography>
                      <Typography component="span" variant="body2" color="textSecondary">
                        מחיר: ₪{item.price.toFixed(2)}
                      </Typography>
                    </>
                  }
                />
                <button onClick={() => handleRemoveFromCart(item)}>הסר</button>
              </ListItem>
            ))}
            <Typography variant="h6" gutterBottom>
              מחיר סופי: ₪{totalCost.toFixed(2)}
            </Typography>
            <button>לתשלום</button>
          </List>
        )}
      </Drawer>
    </>
  );
}

export default Cart;

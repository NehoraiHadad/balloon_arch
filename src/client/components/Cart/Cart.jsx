import { useState, useContext } from 'react';

import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, Switch} from '@mui/material';

import WhatsappButton from './WhatsappButton'
import CartItem from './CartItem'
import {CartContext} from '../Context/ContextCart/ContextCartProvider';


function Cart() {
  const {cartItems, setCartItems, totalCost, setTotalCost} = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [isMehadrin, setIsMehadrin] = useState(false);

  const handleSwitchChange = (event) => {
    setIsMehadrin(event.target.checked);
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
    <IconButton onClick={() => setOpen(true)} 
      sx={{ 
        width: 48,
        height: 48, 
        padding: "6px 8px", 
        borderRadius: '50%'
        }}>
      <Badge badgeContent={cartItems.length} color='primary' >
        <ShoppingCartIcon sx={{color: 'black'}} />
      </Badge>
    </IconButton>

      <Drawer dir='rtl' anchor="right"  open={open} onClose={() => setOpen(false)}
        PaperProps={{ 
          sx: {
            minWidth: '360px',
            width: '100%',
            '@media (min-width: 600px)': {
              width: '360px',
            },
            '@media (min-width: 960px)': {
              width: '360px',
            },
            backgroundColor: '#f5f5f5' ,
          },
          
        }}>
        <Grid container justifyContent="space-between" alignItems="center" sx={{p: 1}}>
          <Typography variant="h4" gutterBottom dir='rtl' margin={0}>
            העגלה שלך
          </Typography>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Grid>
        {cartItems.length === 0 ? (
          <Typography padding={1}>העגלה שלך ריקה. מה תרצה להזמין?</Typography>
        ) : (
        
          <List sx={{ maxWidth: '500px', margin: '0 8px', padding: '0' }}>
            
            {cartItems.map((item) => (              
              <CartItem key={item.id} cartItems={cartItems} item={item} setCartItems={setCartItems} setTotalCost={setTotalCost} totalCost={totalCost} handleRemoveFromCart={handleRemoveFromCart} />
            ))}

            <Grid item > 
              <Switch checked={isMehadrin} onChange={handleSwitchChange} />
              <Typography variant="caption">{isMehadrin ? 'מהדרין' : 'רגיל'}</Typography>
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ padding: '12px' }}>
              <Grid item>
                <Typography variant="h6">מחיר סופי:</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                  ₪{totalCost.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" sx={{ paddingBottom: '12px' }}>
              <WhatsappButton cartItems={cartItems} totalCost={totalCost} isMehadrin={isMehadrin}/>
            </Grid>
          </List>
        )}
      </Drawer>
    </>
  );
}

export default Cart;

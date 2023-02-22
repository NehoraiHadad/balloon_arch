import { useState, useContext } from 'react';

import Drawer from '@mui/material/Drawer';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, Button, Avatar} from '@mui/material';

import {CartContext} from '../Context/ContextCart/ContextCartProvider';


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
            width: '100%',
            '@media (min-width: 600px)': {
              maxWidth: '350px',
            },
            '@media (min-width: 960px)': {
              maxWidth: '350px',
            },
            backgroundColor: '#f5f5f5' ,
            padding:'3px'
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
          <Typography>העגלה ריקה.</Typography>
        ) : (
         
          
          <List sx={{ padding: '0', maxWidth: '500px', margin: '0 auto' }}>
            {cartItems.map((item) => (
              <ListItem key={item.id} sx={{ borderBottom: '1px solid #e0e0e0', maxHeight: '95px' }}>
                <Grid container alignItems="center" gap={1}>
                  <Grid item >
                    <Avatar
                      src={item.image} 
                      alt={item.title}
                      sx={{ width: 85, height: 85 }}
                      variant='rounded'
                    />
                  </Grid>
                  <Grid item height={'100%'} sx={{ flexGrow: 1}} >
                    <Grid container direction={'column'} justifyContent={'space-between'} sx={{alignItems:'center'}}>
                      <Typography variant="subtitle1">{item.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        מחיר: ₪{item.price.toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item >
                    <Grid container spacing={1} justifyContent="flex-end" alignItems="center">
                      <Grid item>
                        <IconButton
                          size="small"
                          onClick={() => {
                            handleRemoveFromCart(item)
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">{item.quantity}</Typography>
                      </Grid>
                      <Grid item>
                        <IconButton
                          size="small"
                          onClick={() => {
                            const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
                            existingItem.quantity += 1;
                            setCartItems([...cartItems]);
                            setTotalCost(totalCost + item.price);
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton size="small" onClick={() => 
                          {
                          setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
                          setTotalCost(totalCost - item.price);
                          }}>
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ padding: '12px' }}>
              <Grid item>
                <Typography variant="h6">מחיר סופי:</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="primary">₪{totalCost.toFixed(2)}</Typography>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" sx={{ paddingBottom: '12px' }}>
              <Button variant="contained" color="primary" disableElevation>
                לתשלום
              </Button>
            </Grid>
          </List>
          

        )}
      </Drawer>
    </>
  );
}

export default Cart;

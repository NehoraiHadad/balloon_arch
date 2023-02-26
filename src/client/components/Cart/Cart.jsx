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
          <Typography>העגלה ריקה.</Typography>
        ) : (
        
        
          <List sx={{ maxWidth: '500px', margin: '0 8px', padding: '0' }}>
            {cartItems.map((item) => (
              <ListItem key={item.id} sx={{ borderBottom: '1px solid #e0e0e0', padding: '10px 8px' }}>
                <Grid container alignItems="center" gap={1} width={'100%'}>
                  <Grid item>
                    <Avatar
                      src={item.image}
                      alt={item.title}
                      sx={{ width: 85, height: 85 }}
                      variant="rounded"
                    />
                  </Grid>
                  <Grid item height={'85px'} width={'230px'}> 

                    <Grid container height={'100%'} width={'100%'} justifyContent="space-between" alignContent={'space-between'}> 

                      <Grid container flexDirection={"column"} width={'100%'} paddingTop={0.5} paddingRight={1.5}
                        sx={{ alignItems: 'flex-start' }}>
                        <Typography variant="h6"  textAlign={'center'} sx={{ direction:'rtl' }}>
                          {item.title}
                        </Typography>
                        <Grid position="absolute" top={0} left={-5} 
                          sx={{ paddingTop: '3px' }}>
                          <IconButton
                            size="small"
                            onClick={() => {
                              const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
                              setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
                              setTotalCost(totalCost - (item.price * existingItem.quantity));
                            }}
                            >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                        <Grid container gap={'3px'} height={'50%'} marginTop={0} marginLeft={0} justifyContent={'space-around'} alignItems={'flex-end'}>
                          <Grid container width={'50%'} justifyContent={'center'} >
                            <Grid >
                              <IconButton size="small" onClick={() => handleRemoveFromCart(item)}>
                                <RemoveIcon />
                              </IconButton>
                            </Grid>
                            <Grid >
                              <Typography variant="body1" padding={0.8}>{item.quantity}</Typography>
                            </Grid>
                            <Grid >
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
                          </Grid>

                          <Grid item >
                            <Typography variant="body2" paddingBottom={1.3} color="textSecondary">
                              מחיר: {item.price.toFixed(2)} ₪
                            </Typography>
                          </Grid>
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
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                  ₪{totalCost.toFixed(2)}
                </Typography>
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

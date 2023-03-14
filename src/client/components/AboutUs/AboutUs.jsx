import './AboutUs.css'

import * as React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton , SvgIcon} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {ReactComponent as Logo} from '../../../public/tiktok-icon.svg';

const AboutUs = () => {
  return (
    <Box
      className='container'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        We are a team of passionate developers who love to create amazing web applications using React and MUI.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginY: 4,
        }}
      >
        <IconButton variant="contained" color="primary" >
            {<WhatsAppIcon />} 
        </IconButton>
        <IconButton variant="contained" color="secondary">
          {<InstagramIcon />}
        </IconButton>
        <IconButton variant="contained" color="info">
            {/* <SvgIcon> */}
                {<Logo />}
            {/* </SvgIcon> */}
        </IconButton>
        <IconButton variant="contained" color="success">
            {<FacebookIcon />}
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-evenly',
          width: '80%',
          marginY: 4,
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="Contemplative Reptile"
            sx={{ borderRadiusTopLeft:'50%', borderRadiusTopRight:'50%' }}
            
          />
          

<CardContent sx={{ textAlign:'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              John Doe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lead Developer
            </Typography>
          </CardContent>
         
    
</Card>

<Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component='img'
    height='140'
    image='/static/images/cards/live-from-space.jpg'
    alt='Live From Space'
    sx={{ borderRadiusTopLeft:'50%', borderRadiusTopRight:'50%' }}
    
  />
 

<CardContent sx={{ textAlign:'center' }}>
    <Typography gutterBottom variant='h5' component='div'>
      Jane Doe
    </Typography>
    <Typography variant='body2' color='text.secondary'>
      UI Designer
    </Typography>
  </CardContent>

</Card>

</Box>

</Box>

);

};

export default AboutUs;
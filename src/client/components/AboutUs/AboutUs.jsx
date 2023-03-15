import './AboutUs.css'

import * as React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Link, IconButton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTiktok, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';


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
      <Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          margin: 2,
        }}
        >
        <IconButton component={Link} sx={{
            "&:hover": {
            backgroundColor: "inherit"
            }, 
            color: '#25D366',
            fontSize: '4rem'
            }}>
            <FontAwesomeIcon icon={faFacebook} />
        </IconButton >
        <IconButton sx={{ 
            "&:hover": {
            backgroundColor: "inherit"
            }, 
            color: '#25D366', 
            fontSize: '4rem'
            }}>
            <FontAwesomeIcon icon={faWhatsapp} />
        </IconButton>
        <Link sx={{color: '#FFFFFF', fontSize: '4rem'}}>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link sx={{color: '#FFFFFF', fontSize: '4rem'}}>
          <FontAwesomeIcon icon={faTiktok} />
        </Link>
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

</Box>

);

};

export default AboutUs;
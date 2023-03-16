import './AboutUs.css'

import * as React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, IconButton, Grid, Avatar } from '@mui/material';

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

      <Box sx={{
        display:'grid',
        gridTemplateColumns:' 1fr 1fr 1fr',
        width: '100%'
      }}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Card sx={{ width: '12rem', height:'14rem', textAlign:'-webkit-center', position: 'relative', background: 'rgba(235,236,236, 50%)'}}>
          <Avatar alt="שמואל" src="../../../public/shmuel.png"
            sx={{ width: 56, height: 56, position:'absolute' , top: '-28px', left: '4rem', overflow: 'visible'}}
           />
            <CardContent sx={{ textAlign:'center', justifyItems: 'center'}}>
              <Typography gutterBottom variant="h5" component="div">
                שמואל מזרחי
              </Typography>
              <Typography variant="body2" color="text.secondary">
                בלונאי בכיר
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container
          flexDirection={'column'}
          alignSelf={'center'}
          sx={{
            alignItems: 'center',
            alignContent: 'center'
          }}
          >
          <Grid container item xs={6} sx={{
            flexFlow: 'row'
          }}>
            <IconButton sx={{
              bgcolor: "#ffffff",
              height: "3.8rem",
              width: "3.8rem",
              color: '#4267B2',
              fontSize: '3.8rem',
              margin: '0.5rem',
              "&:hover": {
                backgroundColor: "#ffffff" ,
              }, 
            }}>
                <FontAwesomeIcon icon={faFacebook} />
            </IconButton >
            <IconButton sx={{ 
              height: "3.8rem",
              width: "3.8rem",
              bgcolor: "#25D366",
              color: '#ffffff', 
              fontSize: '2.3rem',
              margin: '0.5rem',
              "&:hover": {
                backgroundColor: "#25D366",
              }, 
            }}>
                <FontAwesomeIcon icon={faWhatsapp} />
          </IconButton >
          </Grid>
          <Grid container item xs={6} sx={{
            flexFlow: 'row'
          }}>
            <IconButton sx={{
              background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)`,
                height: "3.8rem",
                width: "3.8rem",
                color: '#ffffff', 
                fontSize: '2.3rem',
                margin: '0.5rem',
                "&:hover": {
                  backgroundColor: "inherit",
                }, 
              }}>
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
            <IconButton sx={{ 
              bgcolor: `black`,
              height: "3.8rem",
              width: "3.8rem",
              color: '#ffffff', 
              fontSize: '2.3rem',
              margin: '0.5rem',
              "&:hover": {
                backgroundColor: "black",
              }, 
            }}>
              <FontAwesomeIcon icon={faTiktok} style={{filter: 'drop-shadow(2px 0px 0px #ff0050) drop-shadow(-2px -2px 0px #00f2ea)'}} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-evenly',
            width: '60%',
            marginY: 4,
          }}
        >
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

        </Grid>
      </Box>

</Box>

);

};

export default AboutUs;
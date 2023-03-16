import './AboutUs.css'

import * as React from 'react';
import { Box, Typography, Card, CardContent, IconButton, Grid, Avatar } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTiktok, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';


const AboutUs = () => {
  return (
    <Box
      className='container'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 10px 20px 10px',
        alignItems: 'center',
        justifyContent: 'space-between',
        }}
    >
      <Box textAlign={'center'} margin={3}>
        <Typography variant="h2" component="h1" gutterBottom dir='rtl'>
          קצת עלינו...
        </Typography>
        <Typography variant="h6" component="p" gutterBottom dir='rtl' maxWidth={'50vw'}>
          תביאו לי כבר טקסט לרשום - בנתיים יש פה סתם חירטוטים 😂🤣
        </Typography>
      </Box>

      <Box sx={{
        display:'grid',
        gridTemplateColumns:' 1fr 1fr 1fr',
        width: '100%',
        marginBottom: '30px'
      }}>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Card sx={{ width: '12rem', height:'14rem', textAlign:'-webkit-center', position: 'relative', background: 'rgba(235,236,236, 50%)', overflow: 'visible', borderRadius: `20px`}}>
          <Avatar alt="שמואל" src="//../../../public/shmuel.png"
            sx={{ width: 80, height: 80, position:'absolute' , top: '-40px', left: 'calc(6rem - 40px)'}}
           />
            <CardContent sx={{ textAlign:'center', justifyItems: 'center', marginTop:' 20%'}}>
              <Typography gutterBottom variant="h5" component="div">
                הודיה מזרחי
              </Typography>
              <Typography variant="body1" color="text.secondary">
                מעצבת ראשית
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
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Card sx={{ width: '12rem', height:'14rem', textAlign:'-webkit-center', position: 'relative', background: 'rgba(235,236,236, 50%)', overflow: 'visible', borderRadius: `20px`}}>
          <Avatar alt="שמואל" src="../../../public/shmuel.png"
            sx={{ width: 80, height: 80, position:'absolute' , top: '-40px', left: 'calc(6rem - 40px)'}}
           />
            <CardContent sx={{ textAlign:'center', justifyItems: 'center', marginTop:' 20%'}}>
              <Typography gutterBottom variant="h5" component="div">
                שמואל מזרחי
              </Typography>
              <Typography variant="body1" color="text.secondary">
                בלונאי בכיר
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>

    </Box>

);
}

export default AboutUs;
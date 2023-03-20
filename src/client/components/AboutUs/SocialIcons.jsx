
import {  IconButton, Grid } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTiktok, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
    return(
        <Grid container
        flexDirection={'column'}
        alignSelf={'center'}
        sx={{
          alignItems: 'center',
          alignContent: 'center'
        }}
        >
        <Grid container item xs={6} sx={{
          flexFlow: 'row',
          justifyContent: 'center'
        }}>
          <IconButton sx={{
            bgcolor: "#ffffff",
            height: "3.8rem",
            width: "3.8rem",
            color: '#4267B2',
            fontSize: '3.95rem',
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
          flexFlow: 'row',
          justifyContent: 'center'
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
    )
}

export default SocialIcons;
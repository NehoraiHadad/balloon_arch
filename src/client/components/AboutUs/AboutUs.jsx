import './AboutUs.css'

import * as React from 'react';
import { Box, Typography} from '@mui/material';

import PersonCard from './PersonCard';
import SocialIcons from './SocialIcons';

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
        <Typography variant="h6" component="p" gutterBottom dir='rtl' sx={{
            maxWidth: '50vw', 
            '@media (max-width: 480px)': {
              maxWidth: '90vw'
          }}}>
          תביאו לי כבר טקסט לרשום - בנתיים יש פה סתם חירטוטים 😂🤣
        </Typography>
      </Box>

      <Box sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          width: '100%',
          margin: '30px 0',
          '@media (max-width: 480px)': {
            gridTemplateColumns: '1fr',
            marginTop: '2rem',
            gap: '3rem'
          },
        }}>

        <PersonCard name = 'הודיה' title = 'מעצבת בכירה' photo = 'url'/>

        <SocialIcons />

        <PersonCard name = 'שמואל' title = 'בלונאי ראשי' photo = 'url'/>

      </Box>

    </Box>

);
}

export default AboutUs;
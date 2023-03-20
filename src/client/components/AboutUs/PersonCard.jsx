import {Typography, Grid, Avatar, Card, CardContent } from '@mui/material';

const PersonCard = ({name, title, photo}) => {
    return(
        <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Card sx={{ width: '14rem', height:'16rem', textAlign:'-webkit-center', position: 'relative', background: 'rgba(235,236,236, 50%)', overflow: 'visible', borderRadius: `20px`}}>
        <Avatar alt={name} src={photo}
          sx={{ width: 80, height: 80, position:'absolute' , top: '-40px', left: 'calc(7rem - 40px)'}}
         />
          <CardContent sx={{ textAlign:'center', justifyItems: 'center', marginTop:' 20%'}}>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
}


export default PersonCard;
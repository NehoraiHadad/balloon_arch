import {useState} from 'react';
import './ResponsiveNavBar.css'

import {useMediaQuery, useTheme} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { Link, useLocation } from 'react-router-dom';

import Logo from '../Logo/Photo/Logo';
import NameOfCompany from '../Logo/Text/NameOfCompany';
import MobileNavMenu from './MobileNavMenu';
import DesktopNavMenu from './DesktopNavMenu';
import Cart from '../Cart/Cart';

const pages = [
  {component: 'בית', link: '/'}, 
  {component: 'קטגוריות', link: '/products'}, 
  {component: 'עלינו', link: 'aboutUs'},
];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <AppBar dir='rtl' 
      position={useLocation().pathname === '/' ? 'static' : 'fixed'}
      sx={{
        bgcolor: '#C5C3BF',
         }}>
      <Container maxWidth={'100%'} disableGutters sx={{bgcolor: '#C5C3BF', padding: '0 8px'}}>
        <Toolbar disableGutters 
          sx={{
            justifyContent: 'space-between', 
            width: '100%'
            }}>

          <MobileNavMenu 
            pages={pages} 
            anchorElNav={anchorElNav} 
            handleCloseNavMenu={handleCloseNavMenu} 
            handleOpenNavMenu={handleOpenNavMenu} 
            />

          <DesktopNavMenu  pages={pages}/>

          {useLocation().pathname !== '/' && 
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '40%',
              letterSpacing: '.1rem',
              color: 'inherit',
              fontSize: 40
            }}
            className='companyNameNavBar'>
              <NameOfCompany  /> 
            </Box> }

          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '30%'
          }}>
            {isSmallScreen ? <Cart /> : 
            <Link to={"/"} className="logo"  >
              <Logo />
            </Link>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

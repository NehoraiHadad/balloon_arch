import './ResponsiveNavBar.css'

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { NavLink, Link, useLocation } from 'react-router-dom';

import Logo from '../Logo/Photo/Logo';
import NameOfCompany from '../Logo/Text/NameOfCompany'

const pages = [
  {component: 'בית', link: '/'}, 
  {component: 'מוצרים', link: '/products'}, 
  {component: 'עלינו', link: 'aboutUs'},
];

let style = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '1.1rem',
  fontWeight:'bold'
}

let activeStyle = {
  textDecoration: 'none', 
  color: "red",
  fontSize: '1.1rem',
  fontWeight:'bold'
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar dir='rtl' 
    position={useLocation().pathname === '/' ? 'static' : 'sticky'}
      sx={{
        bgcolor: '#C5C3BF',
         }}>
      <Container maxWidth={'100%'} sx={{bgcolor: '#C5C3BF'}}>
        <Toolbar disableGutters 
          sx={{
            justifyContent: 'space-between', 
            width: '100%'
            }}>

          <Box sx={{ 
            display: { xs: 'flex', md: 'none' } ,
            justifyContent: 'flex-start',
            width: '25%'
            }}>
            <IconButton
              size="large"  
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.component} onClick={handleCloseNavMenu}>
                  <Button sx={{'&:hover':{bgcolor:  'inherit'}}}>
                    <NavLink
                      to={page.link}
                      style={({ isActive }) =>
                          isActive ? activeStyle : style
                      }
                      >
                      {page.component}
                    </NavLink>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            justifyContent: 'flex-start',
            width: '25%',
            textDecoration: 'none' 
            }}>
            {pages.map((page) => (
              <Button
                key={page.component}
                // onClick={handleCloseNavMenu}
                sx={{ my: 1, display: 'block'}}
              >
                <NavLink
                    to={page.link}
                    style={({ isActive }) =>
                        isActive ? activeStyle : style
                    }
                    >
                    {page.component}
                </NavLink>
              </Button>
            ))}
          </Box>

          {useLocation().pathname !== '/' && 
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '50%',
            letterSpacing: '.1rem',
            color: 'inherit',
            fontSize: 30
          }}
          className='companyNameNavBar'>
            <NameOfCompany  /> 
          </Box> }
      
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '25%'
          }}>
            <Link to={"/"} className="logo"  >
              <Logo />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

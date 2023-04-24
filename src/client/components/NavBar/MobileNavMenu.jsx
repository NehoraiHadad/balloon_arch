import React from 'react';
import {useMediaQuery, useTheme} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';

const MobileNavMenu = ({ pages, anchorElNav, handleCloseNavMenu, handleOpenNavMenu }) => {
  let style = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '1.1rem',
    fontWeight: '500'
  };

  let activeStyle = {
    textDecoration: 'none',
    color: 'red',
    fontSize: '1.1rem',
    fontWeight: '500'
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '30%'
      }}
    >
      {isSmallScreen ? null : <Cart />}
      <IconButton size="large" onClick={handleOpenNavMenu} sx={{ color: 'black' }}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          paddingTop: 0,
          paddingBottom: 0
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.component} onClick={handleCloseNavMenu} sx={{ justifyContent: 'center', padding: '0 8px' }}>
            <Button sx={{ '&:hover': { bgcolor: 'inherit' } }}>
              <NavLink to={page.link} style={({ isActive }) => (isActive ? activeStyle : style)}>
                {page.component}
              </NavLink>
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileNavMenu;

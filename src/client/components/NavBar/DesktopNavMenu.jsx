import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { NavLink } from 'react-router-dom';

import Cart from '../Cart/Cart';

const DesktopNavMenu = ({ pages }) => {

  let style = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '1.1rem',
    fontWeight:'400'
  }
  
  let activeStyle = {
    textDecoration: 'none', 
    color: "red",
    fontSize: '1.1rem',
    fontWeight:'500'
  };

  return (
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '30%',            
            textDecoration: 'none' 
            }}>

            <Cart />

            {pages.map((page) => (
              <Button
                key={page.component}
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
  );
}

export default DesktopNavMenu;
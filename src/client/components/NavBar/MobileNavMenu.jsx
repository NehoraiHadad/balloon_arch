import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

const MobileNavMenu = ({
  pages,
  anchorElNav,
  handleCloseNavMenu,
  handleOpenNavMenu,
}) => {
  let style = {
    width: "100%",
    height: "100%",
    padding: '8px',
    textDecoration: "none",
    color: "black",
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  let activeStyle = {
    padding: '8px',
    textDecoration: "none",
    color: "red",
    fontSize: "1.1rem",
    fontWeight: "bold",
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        justifyContent: "flex-start",
        alignItems: "center",
        width: "30%",
      }}
    >
      {isSmallScreen ? null : <Cart />}
      <IconButton
        size="large"
        onClick={handleOpenNavMenu}
        sx={{ color: "black" }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        MenuListProps={{ disablePadding: true }}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.component}
            onClick={handleCloseNavMenu}
            sx={{
              justifyContent: "center",
              padding: "0",
            }}
          >
            <Button 
              sx={{
                padding: 0,
                width: "100%",
                height: "100%",
                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              <NavLink
                to={page.link}
                style={({ isActive }) => (isActive ? activeStyle : style)}
              >
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

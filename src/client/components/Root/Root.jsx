import "./Root.css"

import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import Grid2 from '@mui/material/Unstable_Grid2';
import ResponsiveAppBar from "../NavBar/ResponsiveNavBar";
import { Grid } from "@mui/material";


import {ContextCartProvider} from "../Context/ContextCart/ContextCartProvider";

const Root = () => {
  const [navbarHeight, setNavbarHeight] = useState(56);

  useEffect(() => {
    const handleResize = () => {
      setNavbarHeight(window.innerWidth >= 600 ? 64 : 56);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return(
    <>
      <ContextCartProvider>
      
        <Grid2 container direction={'column'} alignItems={'stretch'} 
          sx={{
            height:'100vh', 
            width: '100vw', 
          }}>
          <Grid item sx={{maxHeight: `${navbarHeight}px`}}>
            <ResponsiveAppBar />
          </Grid> 
          <Grid item id="details"
                marginTop='auto'
            sx={{ 
              height: `calc(100vh - ${navbarHeight}px)`
            }}>
            <Outlet />
          </Grid>
        </Grid2>

      </ContextCartProvider>
    </>
  );
}

export default Root;

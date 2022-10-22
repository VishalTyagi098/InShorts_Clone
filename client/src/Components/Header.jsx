import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button,IconButton,styled} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
            <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

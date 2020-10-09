import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle, PermContactCalendarOutlined,ShoppingCartOutlined, StorefrontOutlined } from '@material-ui/icons';
// import classes from '*.module.css';

import styles from './navbar.module.css';

const Navbar = () => (
  <div className={styles.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton className={styles.menuButton} edge="start" color="inherit" aria-label="menu" >
          <MenuIcon />
        </IconButton>

        <Typography className={styles.title} variant="h6" >
          A to Z Shop
        </Typography>
        
        <div className={styles.top}>
          <IconButton aria-label="Account of current User" aria-controls="menu-appbar" aria-haspopup="true" color="inherit" >
            <StorefrontOutlined />
          </IconButton>
          <IconButton aria-label="Account of current User" aria-controls="menu-appbar" aria-haspopup="true" color="inherit" >
            <PermContactCalendarOutlined />
          </IconButton>
          <IconButton aria-label="Account of current User" aria-controls="menu-appbar" aria-haspopup="true" color="inherit" >
            <ShoppingCartOutlined />
          </IconButton>
          <IconButton aria-label="Account of current User" aria-controls="menu-appbar" aria-haspopup="true" color="inherit" >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
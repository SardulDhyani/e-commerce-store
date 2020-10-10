import React from 'react';
import { AppBar, Toolbar, Typography, Link, IconButton } from '@material-ui/core';
import { LaptopMac, StorefrontRounded, AccountCircleRounded, Brightness4Rounded, ShoppingCartRounded } from '@material-ui/icons'

import styles from './navBar.module.css';

const NavBar = () => (
  <AppBar position='sticky' color='default' elevation={0} className={styles.appBar} >
    <Toolbar className={styles.toolBar}>
      <LaptopMac />
      <Typography variant='h6' color='inherit' noWrap className={styles.toolbarTitle} >
        Tech Store
      </Typography>

    <nav>
      <IconButton spacing={0}>
        <Link className={styles.link} >
          <Brightness4Rounded color='action' />
        </Link>
      </IconButton>
      <IconButton spacing={0}>
        <Link className={styles.link}>
          <StorefrontRounded color='action' />
        </Link>
      </IconButton>
      <IconButton spacing={0}>
        <Link className={styles.link}>
          <ShoppingCartRounded color='action' />
        </Link>
      </IconButton>
      <IconButton spacing={0}>
        <Link className={styles.link}>
          <AccountCircleRounded color='action' />
        </Link>
      </IconButton>
    </nav>
    </Toolbar>
  </AppBar>
);

export default NavBar;
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { LaptopMac, StorefrontRounded, AccountCircleRounded, Brightness4Rounded, ShoppingCartRounded, PersonOutlineOutlined, ExitToAppOutlined, VpnKeyOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import styles from './navBar.module.css';

function NavBar({ currentUser }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='sticky' color='default' elevation={0} className={styles.appBar} >
      <Toolbar className={styles.toolBar}>
        <LaptopMac />
        <Typography variant='h6' color='inherit' noWrap className={styles.toolbarTitle} >
          Tech Store
        </Typography>
  
      <nav>
        <IconButton spacing={0}>
          <Brightness4Rounded color='action' />
        </IconButton>
        <IconButton spacing={0} >
          <Link to='/shop'>
            <StorefrontRounded color='action' />
          </Link>
        </IconButton>
        <IconButton spacing={0}>
          <ShoppingCartRounded color='action' />
        </IconButton>
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
          <AccountCircleRounded color='action' />
        </IconButton>
        {
          currentUser ? 
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
              <MenuItem onClick={handleClose}> <PersonOutlineOutlined />&nbsp; Profile</MenuItem>
              <MenuItem onClick={ () => auth.signOut() } > <ExitToAppOutlined />&nbsp; Logout</MenuItem>
            </Menu>
          :
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose} >
              <Link to='/signin' className={styles.link} >
                <VpnKeyOutlined />&nbsp; Login
              </Link>
            </MenuItem>
          </Menu>
        }
      </nav>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

{/* <IconButton spacing={0} >
          <Link className={styles.link}>
            <AccountCircleRounded color='action' />
          </Link>
        </IconButton> */}
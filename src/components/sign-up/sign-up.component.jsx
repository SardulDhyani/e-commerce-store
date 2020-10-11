import React, { Component } from 'react';
import { Button,  Grid, TextField, Typography } from '@material-ui/core';
import { PersonAddRounded } from '@material-ui/icons';

import styles from './sign-up.module.css';

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  
  render(){
    return(
      <Grid item xs={12} sm={12} md={12} lg={6} >
        <Typography component='h1' variant='h5' align='center'>
          <PersonAddRounded />
          <br />
          Create New Account
        </Typography>
  
        <form className={styles.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name"
            name="userName"   
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
          >
            Sign Up
          </Button>
        </form>
      </Grid>
    )
  }
}

export default SignUp;
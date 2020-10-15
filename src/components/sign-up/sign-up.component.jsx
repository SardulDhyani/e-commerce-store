import React, { Component } from 'react';
import { Button,  Grid, TextField, Typography } from '@material-ui/core';
import { PersonAddRounded } from '@material-ui/icons';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import styles from './sign-up.module.css';

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state={
      displayName : '',
      email : '',
      password : '',
      confirmPassword : ''
    }
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword){
      alert('Invalid password');
      return;
    }
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName : '',
        email : '',
        password : '',
        confirmPassword : ''
      });
      
    } catch(error){
      console.log(error);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name] : value});
  }


  render(){
    const { displayName, email, password, confirmPassword } = this.state;
    return(
      <Grid item xs={12} sm={12} md={12} lg={6} >
        <Typography component='h1' variant='h5' align='center'>
          <PersonAddRounded />
          <br />
          Create New Account
        </Typography>
  
        <form className={styles.form} onSubmit={ this.handleSubmit } noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="User Name"
            name="displayName"
            value={displayName}   
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={this.handleChange}
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
            value={password}
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={this.handleChange}
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
import React, { Component } from 'react';
import { Button,  Grid, TextField, Typography, Link} from '@material-ui/core';
import { LockRounded, MailOutlineRounded } from '@material-ui/icons';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import styles from './sign-in.module.css';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const{ email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email : '', password : '' })
    } catch(error){
      console.log(error);
    }

  }

  handleChange = (event) => {
    const { value, name} = event.target;
    this.setState({ [name] : value });
  }

  render(){
    return(
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Typography component='h1' align='center' variant='h5' >
          <LockRounded />
          <br />
          Sign In
        </Typography>
        <form className={styles.form} onSubmit={ this.handleSubmit } noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={ this.state.email }
            onChange={ this.handleChange }
            autoFocus
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
            value={this.state.password}
            onChange={ this.handleChange }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
          >
            Sign In
          </Button>
          <div className={styles.ten} />
          <Button
            onClick={signInWithGoogle}
            fullWidth
            variant="contained"
            color="secondary"
            className={styles.submit}
          >
            <MailOutlineRounded />
            &nbsp;
            Sign In With Google
          </Button>

        <div className={styles.ten} />
        <Grid container>
          <Grid item xs>
          </Grid>
          <Grid item >
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        </form>
      </Grid>
    );
  }
}

export default SignIn;
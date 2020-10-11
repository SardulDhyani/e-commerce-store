import React, { Component } from 'react';
import { Button,  Grid, TextField, Typography, Link} from '@material-ui/core';
import { LockRounded, MailOutlineRounded } from '@material-ui/icons';

import styles from './sign-in.module.css';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Typography component='h1' align='center' variant='h5' >
          <LockRounded />
          <br />
          Sign In
        </Typography>
        <form className={styles.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            autoComplete="current-password"
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
            type="submit"
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
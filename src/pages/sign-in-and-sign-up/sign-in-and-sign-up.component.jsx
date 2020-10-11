import React from 'react';
import { Grid, Container } from '@material-ui/core';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import styles from './sign-in-and-sign-up.module.css';

const SignInAndSignUp = () => (
  <Container maxWidth='md' className={styles.container} >
    <Grid container spacing={8} component='main' className={styles.root} >
      <SignIn />
      <SignUp />      
    </Grid>
  </Container>
);

export default SignInAndSignUp;
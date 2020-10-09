import React from 'react';
import { Grid, Card, CardMedia } from '@material-ui/core';

import styles from './directory-item.module.css';

const DirectoryItem = () => (
  <div className={styles.root}>
          <image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0XgdzwPU7cbTMsqyJOHR-c&ust=1602339180554000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCcveDYp-wCFQAAAAAdAAAAABAD" alt="Not found" />

    <Grid container spacing={1} >
      <Grid item xs={12} md={4} >
        <Card>
          <image src="./not.jpg" alt="Not found" />
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default DirectoryItem;
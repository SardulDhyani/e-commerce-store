import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import styles from './collection-preview.module.css';

const CollectionPreview = ( { title, items } ) => (
  <Container maxWidth='xl' className={styles.cardGrid}>
    <div> {title} </div>
    <Grid container spacing={3}>
      {
        items
        .filter( (item, index) => index <4 )
        .map( item => (
          <Grid item key={item.id} xs={6} sm={6} md={6} lg={3} >
            <Card className={styles.card}>
              <CardMedia image={item.imageUrl} title={item.name} className={styles.cardMedia} />
              <CardContent className={styles.cardContent}>
                <Typography gutterBottom align='Center' variant='h5' component='h2' >
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  </Container>  
);

export default CollectionPreview;

{/* <div>
<h1>{title}</h1>
<div>
  {
    items.filter( (item, index) => index < 4 ).map( item => ( 
      <div key={item.id}>{item.name}</div>
    ))
  }
</div>
</div> */}
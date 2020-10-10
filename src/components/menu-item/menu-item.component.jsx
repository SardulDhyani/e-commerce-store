import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Card,CardMedia, CardContent, Typography } from '@material-ui/core';

import styles from './menu-item.module.css';

const MenuItem = ({title, imageUrl, id, history}) => {
  return(
    <Grid item key={id} xs={12} sm={6} md={4} onClick={ () => history.push() } >
      <Card className={styles.card}>
        <CardMedia className={styles.cardMedia} image={imageUrl} title={title} />
        <CardContent className={styles.cardContent} >
          <Typography gutterBottom align='center' variant='h5' component='h2'>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default withRouter(MenuItem);


// <div className={`${size} menu-item`}>
// <div className='background-image' style={{ backgroundImage : `url(${imageUrl})` }}  />
//   <div className="content">
//     <h1 className="title">{title}</h1>
//     <span className="subtitle">Shop Now</span>
//   </div>
// </div>


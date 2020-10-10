import React, {Component} from 'react';
import { Container, Grid } from '@material-ui/core';

import MenuItem from '../menu-item/menu-item.component';
import styles from './directory.module.css';

class Directory extends Component{
  constructor(props){
    super(props);

    this.state={
      section : [{
          title : 'Laptops',
          imageUrl : 'https://images.pexels.com/photos/3746947/pexels-photo-3746947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id : 1,
          linkUrl : 'laptops'
        },
        {
          title : 'Mobiles',
          imageUrl : 'https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id : 2,
          linkUrl : 'mobiles'
        },
        {
          title : 'Storage Devices',
          imageUrl : 'https://images.pexels.com/photos/6200/wood-pen-usb-vintage.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id : 3,
          linkUrl : 'storage-devices'
        },
        {
          title : 'Accesories',
          imageUrl : 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          id : 4,
          linkUrl : 'accesories'
        },
        {
          title : 'Tablets',
          imageUrl : 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id : 5,
          linkUrl : 'tablets'
        },
        {
          title : 'Cameras',
          imageUrl : 'https://images.pexels.com/photos/371829/pexels-photo-371829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          id : 6,
          linkUrl : 'cameras'
        }
      ]
    }
  }

  render(){
    return(
      <Container className={styles.cardGrid} maxWidth='xl'>
        <Grid container spacing={4}>
          {
            this.state.section.map( ({ id, ...sectionProps}) => (
              <MenuItem key={id} {...sectionProps} />
            ))
          }
        </Grid>
      </Container>
    )
  }
}

export default Directory;

{/* <div className='directory-menu'>
{
  this.state.section.map( ({title, imageUrl, size, id}) => (
    <MenuItem key={id} size={size} title={title.toUpperCase()} imageUrl={imageUrl} />
  ))
}
</div> */}
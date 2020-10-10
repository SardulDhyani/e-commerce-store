import React, { Component } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
// import styles from './shop.module.css';

class ShopPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      collections : [
        {
          id : 1,
          title : 'Laptops',
          routeName :'laptops',
          items : [
            {
              id : 1,
              name : 'MacBook Pro 13 inch',
              imageUrl : 'https://static.techspot.com/images/products/2020/laptops/org/2020-05-07-product-3.jpg',
              price : 120000
            },
            {
              id : 2,
              name : 'MacBook Pro 16 inch',
              imageUrl : 'https://static.techspot.com/images/products/2020/laptops/org/2020-05-07-product-3.jpg',
              price : 150000
            },
            {
              id : 3,
              name : 'MacBook Pro 13 inch',
              imageUrl : 'https://static.techspot.com/images/products/2020/laptops/org/2020-05-07-product-3.jpg',
              price : 120000
            },
            {
              id : 4,
              name : 'MacBook Pro 16 inch',
              imageUrl : 'https://static.techspot.com/images/products/2020/laptops/org/2020-05-07-product-3.jpg',
              price : 150000
            },
            {
              id : 5,
              name : 'MacBook Pro 13 inch',
              imageUrl : 'https://static.techspot.com/images/products/2020/laptops/org/2020-05-07-product-3.jpg',
              price : 120000
            },
            {
              id : 6,
              name : 'MacBook Pro 16 inch',
              imageUrl : 'https://static.techspot.com/images/products/2020/laptops/org/2020-05-07-product-3.jpg',
              price : 150000
            }
          ]
        },
        {
          id : 2,
          title : 'Mobiles',
          routeName :'mobiles',
          items : [
            {
              id : 1,
              name : 'iPhone 11 Pro Max',
              imageUrl : 'https://images.macrumors.com/t/QJ71WKCVFdBiI0RRQAqxPWFjhSs=/1600x1200/smart/article-new/2019/09/iphone-11-and-11-pro.jpg',
              price : 120000
            },
            {
              id : 1,
              name : 'iPhone 11',
              imageUrl : 'https://static.techspot.com/images/products/2020/laptops/org/2020-05-07-product-3.jpg',
              price : 150000
            }
          ]
        }
      ]
    }
  }

  render(){
    return(
      <div>
        Shop Page
        {
          this.state.collections.map( ({id, ...collectionProps }) => (
            <CollectionPreview key={id} {...collectionProps} />
          ) )
        }
      </div>
    )
  }

}

export default ShopPage;
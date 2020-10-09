import React, { Component } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

class Dierctory extends Component{
  constructor(props){
    super(props);
    this.state = {
      sections : [{
        title : 'Electronics',
        imageurl : '',
        id : 1
      },
      {
        title : 'Clothing',
        imageurl : '',
        id : 2
      },
      {
        title : 'Mens',
        imageurl : '',
        id : 3
      },
      {
        title : 'Women',
        imageurl : '',
        id : 4
      },
      {
        title : 'Fashion',
        imageurl : '',
        id : 5
      }]
    }
  }

  render(){
    return (
      <DirectoryItem />
    )
  }
}

export default Dierctory;
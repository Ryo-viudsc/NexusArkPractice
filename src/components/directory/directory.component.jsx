import React, {Component} from 'react';

//this is class component

import MenuItem from '../menu-item.component/menu-item.component'
import './directory.style.scss'

class Directory extends Component {
//by putting the super 
//we can pull everything we need for the react component
 constructor(){
    super();
    //initialize the state inside of the constructor 
    this.state = {
      sections: [{
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
   };
  }



  //note that, instead of props in the parameter,
  //we can just deconstruct the props and 
  //use the only preferable props by using {}  
    render(){
      return(
       <div className='directory-menu'>
         {
           this.state.sections.map(({title, imageUrl, id, size}) => (
             <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
           ))
         }
        </div>
      )
    }
}



export default Directory;
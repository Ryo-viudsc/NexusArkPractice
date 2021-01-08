import React from 'react';

import './collection-items.styles.scss';


// id: 1,
// title: 'Hats',
// routeName: 'hats',
// items: [
//   {
//     id: 1,
//     name: 'Brown Brim',
//     imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
//     price: 25
//   },


const CollectionItem = ({id, name, price, imageUrl}) => {

    return(
      <div className="collection-item">
          <div
            className="image"
            style={{backgroundImage: `url(${imageUrl})`}}
          />
          <div className='collection-footer'>
              <span className="name">{name}</span>
              <span className="price"> {price} </span>
          </div>
      </div>
    );
}


export default CollectionItem; 

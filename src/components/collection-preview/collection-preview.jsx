import React, {Component} from 'react';
import './collection-preview.styles.scss';


import CollectionItem from '../collection-items/collection-items.component';

//What data file looks like
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

//functional component
const CollectionPreview = ({title, items}) => {

    return(
        <div className="collection-preview" >
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                   .filter((item,idx) => idx < 4)
                   .map((item) => (
                     <CollectionItem key={item.id} item={item}   />
                 ))}
            </div>
        </div>
    );
}





export default CollectionPreview; 




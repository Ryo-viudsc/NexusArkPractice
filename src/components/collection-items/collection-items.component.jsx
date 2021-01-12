import React from 'react';

import './collection-items.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';


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


const CollectionItem = ({item, addItem}) => {

    const { name, price, imageUrl} = item;
   //explicit return function 
   //since we need to render multiple js comopnent out of this fucntion 
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
          <CustomButton onClick={() => addItem(item)} inverted> 
              Add to cart 
          </CustomButton>
      </div>
    );
}

//dispatch is the function that fires off the action object 
const mapReducerToState = (dispatch) => ({
    addItem : (item) => dispatch(addItem(item))
});

export default connect(null,mapReducerToState)(CollectionItem); 

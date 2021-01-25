  
import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import Fade from 'react-reveal/Fade';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';
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
      <Fade bottom>
        <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        <CollectionFooterContainer>
          <NameContainer>{ name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
      </Fade>
    );
}

//dispatch is the function that fires off the action object 
const mapReducerToState = (dispatch) => ({
    addItem : (item) => dispatch(addItem(item))
});

export default connect(null,mapReducerToState)(CollectionItem); 

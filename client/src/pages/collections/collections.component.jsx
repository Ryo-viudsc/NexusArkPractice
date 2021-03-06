import React, {useEffect} from 'react';


import {connect} from 'react-redux';
//comopnent which displays each item in the catergory 
import CollectionItem from '../../components/collection-items/collection-items.component';
import {selectCollection} from '../../redux/shop/shop.selectors';
import {firestore} from '../../firebase/firebase.utils';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collections.styles';
//params:
// collectionId: "hats"

//with useEffect, we can actually pass back a function from
//the function that we pass 
const CollectionPage = ({ collection }) => {

  
  //example: clean up function ====>>>> componentWillumount
  useEffect(()=>{
    const unsubscribeFromCollections = firestore
            .collection('collections')
            .onSnapshot(snapshot => console.log(snapshot));

      return () => {
          unsubscribeFromCollections();
          console.log("I am unsubscribing")
      }
  }, []);

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
//advanced way of manipulating the props with mapStateToProps
//this way, you can blende the originam props and state right before connecting 
const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

//the way the selectCollection is written is called currying
// export const selectCollection = collectionUrlParam => 
// createSelector(
//   [selectCollections],
//   collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
// ) 



export default connect(mapStateToProps)(CollectionPage); 
import React from 'react';


import {connect} from 'react-redux';
//comopnent which displays each item in the catergory 
import CollectionItem from '../../components/collection-items/collection-items.component';
import {selectCollection} from '../../redux/shop/shop.selectors';
import './collections.styles.scss';

//params:
// collectionId: "hats"

const CollectionPage = ({collection}) => {
 
    const {title, items} = collection;

    return(
      <div className='collection-page'>
          <h2 className='title'>CATEGORY PAGE</h2>
          <div className='items'>
            {
              items.map(item => <CollectionItem key={item.id} item={item}  />)
            }
          </div>
      </div>)
}

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
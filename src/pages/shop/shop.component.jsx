import React, { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';

import CollectionPage from '../collections/collections.component';
//this is what selectShopItems looks like : 
// export const selectShopItems = createSelector(
//   [selectShop],
//   shop => shop.selectItems
// );

//we want to selectively render the nested root 
//one root takes us to the overview only when the path has '/shop'
//the other root takes us to the /shop.:category
const ShopPage = ({match}) => {
        return(
          <>
            <div className="shop-page">
              <Route exact path={`${match.path}`}  component={CollectionsOverview} />                 
              <Route path={`${match.path}/:collectionId`}  component={CollectionPage} />                 
            </div> 
          </>
        )
}

export default ShopPage; 
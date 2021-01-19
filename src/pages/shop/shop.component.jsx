import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collections/collections.container';

//we want to selectively render the nested root 
//one root takes us to the overview only when the path has '/shop'
//the other root takes us to the /shop.:category
class ShopPage extends React.Component{
  
   //you could omit the constructor for state 
  //  state = {
  //    loading : true
  //  };
  // unsubscribeFromSnapshot = null;

  //note : firestore.collection is the method to fetch the reference of whatever comes in the ('')  
  componentDidMount(){
  //comopnentDidMount is called after the first rendering 
    const { fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  //     const {updateCollections} = this.props;
  //      // //MAIN METHOD : : fetch method 
  //     // fetch('https://firestore.googleapis.com/v1/projects/clothesec-60551/databases/(default)/documents/collections')
  //     // .then(responce => responce.json())
  //     // .then(collections => console.log(collections))
  }
  
  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
});
export default connect (null, mapDispatchToProps)(ShopPage); 
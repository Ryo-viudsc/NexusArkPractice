import React, { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import CollectionPage from '../collections/collections.component';
import { ThemeConsumer } from 'styled-components';
//this is what selectShopItems looks like : 
// export const selectShopItems = createSelector(
//   [selectShop],
//   shop => shop.selectItems
// );



const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


//we want to selectively render the nested root 
//one root takes us to the overview only when the path has '/shop'
//the other root takes us to the /shop.:category
class ShopPage extends React.Component{
  
   //you could omit the constructor for state 
   state = {
     loading : true
   };
    
  
  unsubscribeFromSnapshot = null;

  //note : firestore.collection is the method to fetch the reference of whatever comes in the ('')  
  componentDidMount(){
      const {updateCollections} = this.props;

      const CollectionRef = firestore.collection('collections');

      // //MAIN METHOD : : fetch method 
      // fetch('https://firestore.googleapis.com/v1/projects/clothesec-60551/databases/(default)/documents/collections')
      // .then(responce => responce.json())
      // .then(collections => console.log(collections))

      // ALTERNATIVE METHOD : : onSnapshot method 
      // The listener can be cancelled by calling the function that is returned when onSnapshot is called.
      // @return
      // An unsubscribe function that can be called to cancel the snapshot listener.
      //   
      CollectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap); //grabbed the reducer from the redux 
        this.setState({loading : false});
      })
      
  }
  

  // you 
  render(){  
  
    const {match} = this.props;
    //we need this loading state when we render the component 
    const {loading} = this.state; 
    return(<>
        <div className="shop-page">
          <Route exact path={`${match.path}`}  render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/> } />                 
          <Route path={`${match.path}/:collectionId`}  render={props => <CollectionPageWithSpinner isLoading={loading} {...props} /> } />                 
        </div> 
      </>)
  }
}


const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
});
export default connect (null, mapDispatchToProps)(ShopPage); 
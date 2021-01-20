import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});


//all thunks are similar to mapDispatchToProps 
//meaning it is a function that accepts the action function 
//and the action function accepts theaction object 
//when the thunk is fired off, 
// it invokes the dispatch with the action function and the action object 


export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        console.log("==========>>>><<<===========");
        console.log(collectionsMap)
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};

//about onSnapShot method 
  // ALTERNATIVE METHOD : : onSnapshot method 
      // The listener can be cancelled by calling the function that is returned when onSnapshot is called.
      // @return
      // An unsubscribe function that can be called to cancel the snapshot listener.
      //   
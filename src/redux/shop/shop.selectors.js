import {createSelector} from 'reselect';

//the reason why we need COLLECTION_ID_MAP is....
//1,  the url has only string values, such as localhost/shop/hats etc 
//while item data in shop.data js doesn't have the 
//item data in the correspond to its name 
//just a number like this 
// id: 1,
// title: 'Hats',
// routeName: 'hats',
// items: [
//   {
//     id: 1,
//     name: 'Brown Brim',
//     imageU 



//just an object that contains string value with uid 
const COLLECTION_ID_MAP = {
    hats : 1,
    sneakers : 2,
    jackets : 3,
    womens : 4,
    mens : 5
};
//params:
// collectionId: "hats"



//the original state is....
//state : shop ->>
            //  -->>  const SHOP_DATA = [
             //      --->   {
                      //     id: 1,
                      //     title: 'Hats',
                      //     routeName: 'hats',
                      //     items: [
                      //       {
                      //         id:


const selectShop = state => state.shop; 

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)


//and we map over the collections 
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );



import { createSelector } from 'reselect';



// const INITIAL_STATE = {
 
//   sections: [      
//       {
//         title: 'hats',
//         imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//         id: 1,
//         linkUrl: 'shop/hats'
//       },
//the original state looks like the above 
//you slice the part out of it 
//and memoize the part 

const selectDirectory = state => state.directory;

const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);

export default selectDirectorySections;
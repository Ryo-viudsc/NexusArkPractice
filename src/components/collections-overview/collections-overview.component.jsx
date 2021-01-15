import React from 'react';
import  {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from "../../components/collection-preview/collection-preview";
//import './collections-overview.styles.scss';
import {CollectionsOverviewContainer} from './collections-overview.styles';


//not singular 
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({collections}) => (
  <CollectionsOverviewContainer>
        {
          collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview  key={id} {...otherCollectionProps}  />
          ))
        }
  </CollectionsOverviewContainer>
); 


const mapStateToProps = createStructuredSelector({
  collections : selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
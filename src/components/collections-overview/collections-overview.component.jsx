import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => {

  console.log("debug for collection overview" );
 console.log(collections);
 console.log("=================");

  return(
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionsOverview);
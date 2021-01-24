import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TitleHeader from "../title-header/title-header.component"
import ParallaxImage from '../../parax/parallx-image';

const CollectionsOverview = ({ collections }) => {

    return(
      <>  
      
      <ParallaxImage />
      <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </CollectionsOverviewContainer>
      </>
      )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionsOverview);
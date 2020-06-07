import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './display.styles.scss';

import CollectionPreview from '../collection/preview/preview.component';
import { selectCollections } from '../../redux/shop/shop.selector';

const Display = ({ collections }) => (
    collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps}></CollectionPreview>;
    })
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
});

export default connect(mapStateToProps)(Display);
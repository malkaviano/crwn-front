import React from 'react';
import { connect } from 'react-redux';

import './display.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selector';
import Item from '../../components/collection/item/item.component';

const DisplayPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (<Item key={item.id} item={item}></Item>))
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(DisplayPage);
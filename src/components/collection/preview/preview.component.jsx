import React from 'react';

import './preview.styles.scss';

import CollectionItem from '../item/item.component';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, idx) => idx < 4)
                        .map(({id, ...otherProps}) => (
                            <CollectionItem key={id} {...otherProps}></CollectionItem>
                        ))
                }
            </div>
        </div>
    );
}

export default CollectionPreview;
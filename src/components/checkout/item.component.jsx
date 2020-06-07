import React from 'react';
import { connect } from 'react-redux';

import './item.styles.scss';

import { removeItem, increaseQuantity, decreaseQuantity } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, decreaseQuantity, increaseQuantity, removeItem }) => {
    const { id, name, imageUrl, price, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseQuantity(id)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => increaseQuantity(id)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={() => removeItem(id)}>&#10005;</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id)),
    increaseQuantity: id => dispatch(increaseQuantity(id)),
    decreaseQuantity: id => dispatch(decreaseQuantity(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
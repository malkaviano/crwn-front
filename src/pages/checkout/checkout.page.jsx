import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './checkout.styles.scss';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout/item.component';
import CartItem from '../../components/cart/item/item.component';

const CheckoutPage = ({ cartItems, cartTotal }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            {
                ["Product", "Description", "Quantity", "Price", "Remove"].map(header => (
                    <div className="header-block">
                        <span>{header}</span>
                    </div>
                ))
            }
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={CartItem.id} cartItem={cartItem}></CheckoutItem>
            ))
        }
        <div className="total">
            <span>TOTAL: ${cartTotal}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
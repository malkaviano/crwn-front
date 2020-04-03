import React from 'react';
import { connect } from 'react-redux';

import './dropdown.styles.scss';

import CustomButton from '../../ui/button/button.component';
import CartItem from '../item/item.component';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => {
                        return (
                            <CartItem key={cartItem.id} item={cartItem}></CartItem>
                        );
                    })
                }
            </div>
            <CustomButton>GO TO  CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = ({ cart: { cartItems }}) => {
    return {
        cartItems
    };
}

export default connect(
    mapStateToProps,
)(CartDropdown);
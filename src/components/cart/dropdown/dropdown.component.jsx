import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './dropdown.styles.scss';

import Button from '../../ui/button/button.component';
import CartItem from '../item/item.component';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => {
                            return (
                                <CartItem key={cartItem.id} item={cartItem}></CartItem>
                            );
                        })
                    ) : (
                            <span className="empty-message">Your cart is empty</span>
                        )
                }
            </div>
            <Button onClick={
                () => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }
            }
            >
                GO TO  CHECKOUT
            </Button>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems });

export default withRouter(connect(
    mapStateToProps,
)(CartDropdown));
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

import { auth } from '../../firebase/firebase';
import CartIcon from '../cart/icon/icon.component';
import CartDropdown from '../cart/dropdown/dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to="/" className='logo-container'>
                <Logo className='logo'></Logo>
            </Link>
            <div className="options">
                <Link to="/shop" className='option'>
                    SHOP
                </Link>
                <Link to="/shop" className='option'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                        (
                            <div className='option' onClick={() => auth.signOut()}>
                                SIGN OUT
                            </div>
                        ) :
                        (<Link className='option' to='/signin'>SIGN IN</Link>)
                }
                <CartIcon></CartIcon>
            </div>
            {
                hidden ?
                    null :
                    <CartDropdown></CartDropdown>
            }

        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
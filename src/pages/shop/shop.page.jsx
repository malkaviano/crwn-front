import React from 'react';
import { Route } from 'react-router-dom';

import './shop.styles.scss';

import Display from '../../components/display/display.component';
import DisplayPage from '../display/display.page';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={Display}></Route>
        <Route path={`${match.path}/:collectionId`} component={DisplayPage}></Route>
    </div>
);

export default ShopPage;
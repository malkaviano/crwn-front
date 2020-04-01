import React from 'react';

import './signin.styles.scss';

import SignInComponent from '../../components/signin/signin.component';

const SignInPage = () => {
    return (
        <div className='signin'>
            <SignInComponent></SignInComponent>
        </div>
    );
};

export default SignInPage;
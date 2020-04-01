import React from 'react';

import './signin.styles.scss';

import SignInComponent from '../../components/auth/signin/signin.component';
import SignUpComponent from '../../components/auth/signup/signup.component';

const SignInPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignInComponent></SignInComponent>
            <SignUpComponent></SignUpComponent>
        </div>
    );
};

export default SignInPage;
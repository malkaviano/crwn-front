import React from 'react';

import './signup.styles.scss';

import FormInput from '../../ui/input/input.component';
import CustomButton from '../../ui/button/button.component';

import { auth, createUserProfile } from '../../../firebase/firebase';

class SignUpComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");

            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password,
            );

            await createUserProfile(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>
                    I do not have a password
                </h2>
                <span>
                    Sign up with your email and password
                </span>

                <form
                    className='sign-up-form'
                    onSubmit={this.handleSubmit}
                >
                    <FormInput
                        type="text"
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='displayName'
                        required
                    />
                    <FormInput
                        type="email"
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        type="password"
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInput
                        type="password"
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='confirmPassword'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">
                            Sign Up
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpComponent;
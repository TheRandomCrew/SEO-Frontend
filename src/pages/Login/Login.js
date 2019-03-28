import React from 'react'
import { Redirect } from 'react-router-dom'
import tokenService from '../token'
import { history } from '../Routes'
import LoginForm from './container/LoginForm';

const Login = () => {

    const login = () => {
        tokenService.set('Fake token here ad7233b2b3b')
        history.replace('/')
    }

    const onSubmit = e => {
        e.preventDefault();
        login()
    };

    return tokenService.get() ? (
        <Redirect to="/" />
    ) : (
            <LoginForm onSubmit={onSubmit}/>
        )
}

export default Login;

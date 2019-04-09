import React from 'react'
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'
import tokenService from '../token'
import { history } from '../Routes'
import LoginForm from './container/LoginForm';
import globalContext from '../../store/globalContext'

const Login = () => {
    const { actions: { setUserID } } = React.useContext(globalContext);

    const login = (email, password) => {
        axios({
            url: 'http://backend.borjamediavilla.com/api/v1/auth/login',
            method: 'post',
            data: { email, password },
            crossdomain: true
        })
            .then(res => {
                if (res.status === 200) {
                    const { success } = res.data;
                    tokenService.set(success[0].token)
                    setUserID(success[0]._id)
                    history.replace(`/${success[0]._id}`)
                } else {
                    console.log(res)
                    const error = new Error(res.errors);
                    throw error;
                }
            })
            .catch(e => { console.error(e) })
    }

    const onSubmit = (email, password) => {
        login(email, password)
    };


    return tokenService.get() ? (
        <Redirect to="/" />
    ) : (
            <React.Fragment>
                <LoginForm onSubmit={onSubmit} />
                <Link to='/inscribete'>Inscibete</Link>
            </React.Fragment>
        )
}

export default Login;

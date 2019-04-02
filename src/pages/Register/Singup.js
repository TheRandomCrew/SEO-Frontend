import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { history } from '../Routes';
import RegisterForm from './container/RegisterForm';

const Singup = () => {
    const onRegister = (name, email, password) => {
        console.log({ name, email, password })
        axios({
            url: 'http://backend.borjamediavilla.com/api/v1/auth/register',
            method: 'post',
            data: { name, email, password },
            crossdomain: true
        })
            .then(res => {
                if (res.status === 201) {
                    const { msg } = res;
                    console.log(msg)
                    history.replace('/login')
                } else {
                    console.log(res)
                    const error = new Error(res.errors);
                    throw error;
                }
            })
            .catch(e => { console.error(e) })
    }

    return (
        <React.Fragment>
            <RegisterForm onSubmit={onRegister} />
            <Link to='/entra'>Ingresa</Link>
        </React.Fragment>
    )
}

export default Singup

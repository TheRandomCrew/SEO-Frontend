import React from 'react'
import { Redirect } from 'react-router-dom'
import tokenService from '../service/token'
import { history } from '../routes'
import {
    ParentForm,
    HeaderForm,
    FormMainBody,
    Button
} from '../style/componentsStyle';

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
            <ParentForm onSubmit={onSubmit}>
                <HeaderForm>
                    <p>Ingrese sus credenciales para entrar:</p>
                </HeaderForm>

                {InputDiv("username", "text", "enter username")}
                {InputDiv("password", "password", "enter password")}
                <div>
                    <Button
                        bgcolor="black"
                        type="submit"
                        value="submit"
                        onClick={login}
                    >
                        Seguir
                    </Button>
                </div>
            </ParentForm>
        )
}

const InputDiv = (id, type, placeHolder) => {
    return (
        <FormMainBody>
            <label htmlFor={id}>{id}</label>
            <input
                type={type}
                name={id}
                id={id}
                placeholder={placeHolder}
                required
            />
        </FormMainBody>
    )
}

export default Login;

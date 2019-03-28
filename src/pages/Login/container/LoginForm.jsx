import React from 'react'
import {
    ParentForm,
    HeaderForm,
    FormMainBody,
    Button
} from '../style/componentsStyle';

const LoginForm = ({onSubmit}) => {
  return (
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

export default LoginForm

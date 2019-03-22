import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import tokenService from 'services/token'
import { history } from 'routes'
import {default as LoginView} from 'presentation/Login'

class Login extends PureComponent {
  login = () => {
    tokenService.set('Fake token here ad7233b2b3b')
    history.replace('/')
  }

  render() {
    return tokenService.get() ? (
      <Redirect to="/" />
    ) : (
        <LoginView login={this.login}/>
      )
  }
}

export default Login

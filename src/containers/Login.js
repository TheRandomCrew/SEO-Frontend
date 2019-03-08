import React, { PureComponent } from 'react'
import tokenService from '../services/token'
import { history } from '../routes'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  login = () => {
    tokenService.set('Fake token here ad7233b2b3b')
    history.replace('/')
  }

  render() {
    return tokenService.get() ? (
      <Redirect to="/" />
    ) : (
        <div className="Login">
          <button onClick={this.login}>Login</button>
        </div>
      )
  }
}

export default Login

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import tokenService from './token'

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        tokenService.get() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute

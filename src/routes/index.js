import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import createBrowserHistory from 'history/createBrowserHistory'
// import { ToastContainer } from 'react-toastify'
// import { toasterLiveTime } from '../utils/constants'
import { PrivateRoute } from '../components'
import { Layout, Login } from '../containers'

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Container>
        <Content>
          {/* <ToastContainer
            autoClose={toasterLiveTime}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            pauseOnHover={true}
          /> */}
          <Switch>
            <Route exact={true} path={'/login'} component={Login} />
            <PrivateRoute exact={false} path={'/'} component={Layout} />
          </Switch>
        </Content>
      </Container>
    </Router>
  )
}

export const links = [
  {to:'/', name: "Ranking Palabras Clave"},
  {to:'/articulos', name: "Articulos"},
  {to:'/caracteristicas', name: "Caracteristicas"},
  {to:'/precios', name: "Precios"},
  {to:'/afiliados', name: "Afiliados"},
  {to:'/contacto', name: "Contacto"}
]

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
`

export default Routes

import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './utils/registerServiceWorker'
import Routes from './routes'
import AppState from './state'
import './styles/normalize.css'
import './styles/globalStyles'

// react-toastify config
// import { style } from 'react-toastify'
// style({
//   colorSuccess: 'verde',
// })

render(
  <AppState>
      <Routes />
  </AppState>,
  document.getElementById('root')
)
registerServiceWorker()

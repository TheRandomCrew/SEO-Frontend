import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './utils/registerServiceWorker'
import Routes from './routes'
import './styles/normalize.css'
import './styles/globalStyles'

// react-toastify config
// import { style } from 'react-toastify'
// style({
//   colorSuccess: 'verde',
// })

render(
      <Routes />,
  document.getElementById('root')
)
registerServiceWorker()

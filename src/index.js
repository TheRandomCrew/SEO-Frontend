import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './utils/registerServiceWorker'
import Routes from './routes'
import './styles/normalize.css'
import './styles/globalStyles'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faBalanceScale,
  faSpinner,
  faMoneyBill,
  faMousePointer,
  faHeart,
  faArrowsAltV,
  faShareAlt,
  faComment
} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);
library.add(faSpinner);
library.add(faBalanceScale);
library.add(faMoneyBill);
library.add(faMousePointer);
library.add(faHeart);
library.add(faShareAlt);
library.add(faComment);
library.add(faArrowsAltV);

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

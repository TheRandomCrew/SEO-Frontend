import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style/globalStyles'
import * as serviceWorker from './util/serviceWorker';
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
import Routes from './routes';

library.add(faSearch);
library.add(faSpinner);
library.add(faBalanceScale);
library.add(faMoneyBill);
library.add(faMousePointer);
library.add(faHeart);
library.add(faShareAlt);
library.add(faComment);
library.add(faArrowsAltV);

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle /><Routes />
    </React.Fragment>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

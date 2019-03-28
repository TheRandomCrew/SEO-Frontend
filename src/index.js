import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './globalStyles'
import * as serviceWorker from './serviceWorker';
import Routes from './pages/Routes';

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle /><Routes />
    </React.Fragment>
    , document.getElementById('root'));

serviceWorker.register();

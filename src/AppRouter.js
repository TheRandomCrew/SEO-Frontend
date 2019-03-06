import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarView from './Containers/NavBarView';
import FooterView from './Containers/FooterView';
import Home from './Containers/Home.jsx';
import Features from './Containers/Features';
import Pricing from './Containers/Pricing';
import Docs from './Docs/Docs';
// import Login from './Containers/Login';
// import SingIn from './User/SingIn';

const AppRouter = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBarView />
        <div style={{ height: '100%', minHeight: '100%' }}>
          <Switch>
            <Route component={Home} exact path='/' />
            <Route component={Pricing} path='/pricing' />
            {/* <Route component={Login} path='/login' /> */}
            {/* <Route component={SingIn} path='/singin' /> */}
            <Route component={Features} path='/features' />
            <Route component={Docs} path='/documentation' />
          </Switch>
        </div>
        <FooterView />
      </React.Fragment>
    </Router>
  );
};

export default AppRouter;

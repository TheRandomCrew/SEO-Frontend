import React, { Fragment } from 'react'
import Footer from './Layout/Footer';
import NavBar from './Layout/NavBar';

const Layout = ({ children = undefined }) => {

    return (
        <Fragment>
            <NavBar />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout;
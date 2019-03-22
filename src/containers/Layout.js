import React from 'react'
import { default as LayoutView } from 'presentation/Layout'
import Home from 'presentation/Home';
// import appContext from '../utils/appContext'
// const { Consumer } = appContext


// THIS IS INTENDED TO BE A LOGIC COMPONENT LATER
// FOR EXAMPLE SETTING INTERNATIONALIZATION OR THEME

const Layout = () => {    
    return (
        <LayoutView>
            <Home/> 
            {/* Modify this Home */}
        </LayoutView>
    )
}

export default Layout;
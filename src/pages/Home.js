import React from 'react'
import {default as HomeView} from '../containers/Home'
import AppState from '../state/App';

const Home = () => {
    return (
        <AppState>
            <HomeView/>
        </AppState>
    )
}

export default Home;
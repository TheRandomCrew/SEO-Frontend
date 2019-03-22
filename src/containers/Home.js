import React, { useState } from 'react';
import { default as HomeView } from 'presentation/Home';
import appContext from 'state/appContext';

const { Consumer } = appContext;

const Home = () => {
    const [hide, setHide] = useState(false); // my first hook
    return (
        <Consumer>
            {({ state }) => (
                <HomeView
                    serpData={state.serpData}
                    hide={hide}
                    setHide={setHide}
                />
            )}
        </Consumer>
    )
}

export default Home

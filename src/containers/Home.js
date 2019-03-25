import React, { useState } from 'react';
import { default as HomeView } from 'presentation/Home';
import appContext from 'state/appContext';

const { Consumer } = appContext;

const Home = () => {
    const [hide, setHide] = useState(false); // my first hook
    return (
        <Consumer>
            {({ state, actions }) => (
                <HomeView
                    setPair={actions.setPair}
                    serpData={state.serpData}
                    title={state.title}
                    meta={state.meta}
                    hide={hide}
                    setHide={setHide}
                />
            )}
        </Consumer>
    )
}

export default Home

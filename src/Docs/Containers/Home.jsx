import React from 'react'
import Highlight from '../Highlight';

const Home = () => {
    return (
        <div>
            <h2 id="home">Home</h2>

            <p>Se refiere al campo central de la vista</p>

            <img src='https://cdn.glitch.com/ed38e511-b719-4c3a-abfd-47bc110ddac1%2Fthumbnails%2FHome.png?1548100758734' />

            Home esta dividido en varias partes:

            <Highlight
                inline={false}
                code={HomeOverview.split('\n')}
            />
    </div>
    )
}

export default Home

const  HomeOverview=String.raw`componentWillMount() {
    this.getIP()
}

componentDidMount() {
    this.getAWS()
}

getAWS = () => {
    ...
}

getIP = () => {
    ...
}

set = (key, value) => {
    this.setState({ [key]: value });
};`
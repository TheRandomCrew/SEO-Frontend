import React from 'react'
import axios from 'axios';

const PDACell = ({url=''}) => {
    const [PDA, setPDA] = React.useState('-');
    const [lastURL, setLastURL] = React.useState('');
    
    React.useLayoutEffect(() => {
        if (url && url!==lastURL ) {
            console.log('update pda')
            apiPDA(url);
            setLastURL(url);
        }
    })

    const apiPDA = async (url) => {
        await axios({
            url: 'http://server.borjamediavilla.com/api/moz',
            method: 'post',
            data: { url },
            crossdomain: true
        })
            .then((res) => {
                const { data } = res.data
                if (data) {
                    const { pda } = data
                    setPDA(pda)
                }
                else { console.error('pda error:\n', res.data) }
            })
            .catch((e) => { console.log(e) })
    }
    return (
        <p> {PDA} </p>
    )
}

export default PDACell;
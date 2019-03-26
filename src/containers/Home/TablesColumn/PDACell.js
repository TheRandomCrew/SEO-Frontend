import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import {
    default as PDACellView
} from 'presentation/Home/TablesColumn/Tables/PDACell';

const PDACell = ({ url }) => {
    const [PDA, setPDA] = useState('-');

    useLayoutEffect(() => {
        if (url) {
            console.log('update fb shares')
            apiPDA(url)
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
        <PDACellView
            pda={PDA}
        />
    )
}

export default PDACell

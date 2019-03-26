import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import {
    default as FacebookCellView
} from 'presentation/Home/TablesColumn/Tables/FacebookCell';


const FacebookCell = ({ url='' }) => {
    const [shares, setShares] = useState('|')
    useLayoutEffect(() => {
            if(url){
                apiFacebook(url)
            }        
    })
    const apiFacebook = async (url) => {
        const apiURL = `https://graph.facebook.com/v3.2/?id=${url}&fields=engagement&access_token=172128476844398|F_U3IWRlVkTq_4Mh75VWreBoAHc`
        await axios.get(apiURL)
            .then(async resp => {
                if (resp.data) {
                    const { engagement } = resp.data
                    setShares(engagement.share_count)
                }
                else {
                    console.error('bad facebook response:', resp)
                }
            })
            .catch(error => {
                console.error('facebook api error' + JSON.stringify(error))
            });
    }
    return (
        <FacebookCellView
            share_count={shares}
        />
    )
}

export default FacebookCell;

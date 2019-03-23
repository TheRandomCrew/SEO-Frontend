import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    default as SearchFormView
} from 'presentation/Home/TablesColumn/SearchForm';

const SearchForm = ({ setPair, serpData }) => {
    const [hide, setHide] = useState(false)
    const [ip, setIp] = useState('0.0.0.1')

    const getIP = () => {
        axios.get('http://api.ipify.org', {
        })
            .then((res) => {
                const ip = res.data
                setIp(ip)
            })
            .catch((e) => {
                console.log(e)
                setIp('0.0.0.1')
            })
    }

    useEffect(() => {
        getIP()
    })

    return (
        <SearchFormView
            ip={ip}
            hide={hide}
            serpData={serpData}
            setHide={setHide}
            setPair={setPair}
        />
    )
}

export default SearchForm

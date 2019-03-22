import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { default as SearchFormView } from 'presentation/Home/TablesColumn/SearchForm';

const SearchForm = (query, filter, setPair) => {
    const [hide, setHide] = useState(false)
    const [ip, setIp] = useState('0.0.0.1')

    const getIP = () => {
        axios.get('http://api.ipify.org', {
        })
            .then((res) => {
                const ip = res.data
                console.log(ip)
                return ip
            })
            .catch((e) => {
                console.log(e)
                return '0.0.0.1'
            })
    }

    useEffect(() => {
        setIp(getIP())
    }, [])

    return (
        <SearchFormView
            ip={ip}
            hide={hide}
            query={query}
            filter={filter}
            setHide={setHide}
            setPair={setPair}
        />
    )
}

export default SearchForm

import React from 'react';
import axios from 'axios';

const useIP = () => {
    const [ip, setIP] = React.useState('0.0.0.1')

    React.useEffect(() => {
        axios.get('http://api.ipify.org', {
        })
            .then((res) => {
                const ip = res.data
                setIP(ip)
            })
            .catch((e) => {
                console.log(e)
                setIP('0.0.0.1')
            })
    })
  return ip
}

export default useIP

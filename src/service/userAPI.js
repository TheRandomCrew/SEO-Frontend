import axios from 'axios';

export const login = payload => {
    const URL = `YOUR_URL`;
    return axios({
        method: 'post',
        url: URL,
        data: payload,
        crossdomain: true
    })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}
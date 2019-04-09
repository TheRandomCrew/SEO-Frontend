import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { history } from '../Routes';
import RegisterForm from './container/RegisterForm';
import { singupPost } from '../../services/internalApi';

const Singup = () => {
    const [loading, setLoading] = React.useState(false)
    const [res, singUp] = singupPost();

    const onRegister = (name, email, password) => {
        console.log({ name, email, password })
        singUp({ name, email, password })
        axios({
            url: 'http://backend.borjamediavilla.com/api/v1/auth/register',
            method: 'post',
            data: { name, email, password },
            crossdomain: true
        })
            .then(res => {
                if (res.status === 201) {
                    const { msg } = res;
                    console.log(msg)
                    history.replace('/login')
                } else {
                    console.log(res)
                    const error = new Error(res.errors);
                    throw error;
                }
            })
            .catch(e => { console.error(e) })
    }

    React.useEffect(() => {
      if(res.pending){
        setLoading(true)
      }
      if(res.error){
        console.error('error')
      }
      if(res.complete){
        console.log(res.data)
        setLoading(false)
      }
    }, [res])

    return (
        <React.Fragment>
            <RegisterForm onSubmit={onRegister} />
            <Link to='/entra'>Ingresa</Link>
            {loading}
        </React.Fragment>
    )
}

export default Singup

import React from 'react';
import axios from 'axios';

// taken from https://medium.com/@jaryd_34198/seamless-api-requests-with-react-hooks-part-2-3ab42ba6ad5c
const useAxios = (fn) => {
    const [res, setRes] = React.useState({
        data: null,
        complete: false,
        pending: false,
        error: false
      });
      const [req, setReq] = React.useState();
    
      React.useEffect(
        () => {
          if (!req) return;
          setRes({
            data: null,
            pending: true,
            error: false,
            complete: false
          });
          axios(req)
            .then(res =>
              setRes({
                data: res.data,
                pending: false,
                error: false,
                complete: true
              })
            )
            .catch(() =>
              setRes({
                data: null,
                pending: false,
                error: true,
                complete: true
              })
            );
        },
        [req]
      );
    
      return [res, (...args) => setReq(fn(...args))];
}

export default useAxios;
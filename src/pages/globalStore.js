import React, { useState } from 'react'
import globalContext from './globalContext';

const { Provider } = globalContext;

const GlobalStore = ({ children = undefined }) => {
  const [theme, setTheme] = useState('light')
  const [userID, setUserID] = useState('1')
  return (
    <Provider
      value={{
        state: {
          theme,
          userID
        },
        actions: {
          setTheme,
          setUserID
        }
      }}
    >
      {children}
    </Provider>
  )
}

export default GlobalStore

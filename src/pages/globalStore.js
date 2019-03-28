import React from 'react'
import globalContext from './globalContext';

const globalStore = ({children=undefined}) => {
    const [theme, setTheme] = useState('light')
  return (
    <globalContext.Provider
    value={{
        state: {
            theme
        },
        actions: {
            setTheme
        }
    }}
    >
      {children}
    </globalContext.Provider>
  )
}

export default globalStore

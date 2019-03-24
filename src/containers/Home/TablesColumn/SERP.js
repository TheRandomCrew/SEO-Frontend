import React from 'react'
import appContext from 'state/appContext';

const { Consumer } = appContext;

const Search = () => {
  return (
    <Consumer>
      {({ state, actions }) => (
          
          hola
      )}
    </Consumer>
  )
}

export default Search

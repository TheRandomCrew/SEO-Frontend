import React from 'react'
import SearchForm from './SearchForm';
import appContext from 'state/appContext';

const { Consumer } = appContext;

const Search = () => {
  return (
    <Consumer>
      {({ state, actions }) => (
          <SearchForm 
            setPair={actions.setPair}
            serpData={state.serpData}
          />
      )}
    </Consumer>
  )
}

export default Search

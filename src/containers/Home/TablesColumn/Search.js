import React from 'react'
import DNDContext from 'state/DNDContext';
import SearchForm from './SearchForm';
const { Consumer } = DNDContext;

const Search = () => {
  return (
    <Consumer>
      {({ state }) => (
          <SearchForm 
            query={state.query}
            filter={state.filter}
            setPair={state.setPair}
          />
      )}
    </Consumer>
  )
}

export default Search

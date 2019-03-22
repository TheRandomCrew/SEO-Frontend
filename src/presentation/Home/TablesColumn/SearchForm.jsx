import React from 'react'
import styled from 'styled-components'
import Preferences from './SearchForm/Preferences';
import SearchBox from './SearchForm/SearchBox';

const SearchForm = ({
  setPair,  
  setHide, 
  filter,
  query,
  hide, 
  ip
}) => {
  return (
    <div>
      <SearchBox query={query} setQuery={setPair}/>
      <Button onClick={() => setHide(!hide)}>Filtrar</Button>
      {hide&&<Preferences setFilter={setPair} filter={filter}/>}      
    </div>
  )
}

export default SearchForm;

const Button = styled.button`
    background: #3FB618;
    color: #fff;
`
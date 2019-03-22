import React from 'react';
import styled from 'styled-components'
import TypeAhead from './TypeAhead';

const SearchBox = ({query, setQuery}) => {
  return (
    <div>
      <TypeAhead query={query} />
      <Button onClick={() => setQuery()}>Buscar</Button>
    </div>
  )
}

export default SearchBox;

const Button = styled.button`
    background: #3FB618;
    color: #fff;
`
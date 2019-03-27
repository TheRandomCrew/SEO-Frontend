import React from 'react'
import styled from 'styled-components'
import SearchBox from 'containers/Home/TablesColumn/SearchBox';
import Preferences from 'containers/Home/TablesColumn/Preferences';

const SearchForm = ({
  setPair,
  setHide,
  serpData,
  hide,
  ip
}) => {
  return (
    <div>
      <SearchBox setQuery={setPair} ip={ip} />
      <Button onClick={() => setHide(!hide)}>Filtrar</Button>
      {
        hide && <Preferences
          setFilter={setPair}
          setHide={setHide}
          serpData={serpData}
        />
      }
    </div>
  )
}

export default SearchForm;

const Button = styled.button`
  background: #3fb618;
  color: #fff;
  padding: 10px;
  border: 2px solid #25a62a;
`
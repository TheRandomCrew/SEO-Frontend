import React from 'react';
import styled from 'styled-components'
import TypeAhead from './TypeAhead';
import { Row } from 'styles/GridStyled';
import { Column } from 'styles/GridStyled';

const SearchBox = ({ query, setQuery, ip }) => {
  return (
    <Row>
      <Column md={5}>
        <InputText
          type="text"
          // onChange={onChange}
          // onKeyDown={onKeyDown}
          // value={userInput}
          placeholder={'Palabra Clave'}
        />
      </Column>
      <Column md={5}>
        <TypeAhead query={query} />
      </Column>
      <Column md={2}>
        <ButtonSearch onClick={() => setQuery()}>Buscar</ButtonSearch>
      </Column>
    </Row>
  )
}

export default SearchBox;

const Button = styled.button`
    background: #3FB618;
    color: #fff;
`

const ButtonSearch = styled(Button)`
    text-align: center;
    padding: 10px 3px;
    text-decoration: none;
    position: relative;
    right: 0px;
`

const InputText = styled.input`
    border: 1px solid #999;
    padding: 0.5rem;
`
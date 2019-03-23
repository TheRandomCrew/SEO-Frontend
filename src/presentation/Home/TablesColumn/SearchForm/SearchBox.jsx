import React from 'react';
import styled from 'styled-components';
import TypeAhead from './TypeAhead';
import { Row } from 'styles/GridStyled';
import { Column } from 'styles/GridStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBox = ({
  setLanguages,
  setKeywords,
  submitQuery,
  keywords,
  languages = [] }) => {
  return (
    <Row>
        <Column md={1}>
          <button disabled>
            <FontAwesomeIcon icon="search" />
          </button>
        </Column>
        <Column md={4}>
          <InputText
            type="text"
            onChange={e => setKeywords(e.target.value)}
            value={keywords}
            placeholder={'Palabra Clave'}
            required
            autoFocus
          />
        </Column>
        <Column md={5}>
          <TypeAhead setLanguages={setLanguages} languages={languages} />
        </Column>
        <Column md={2}>
          <ButtonSearch
            onClick={() => submitQuery()}
          >
            Buscar
          </ButtonSearch>
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
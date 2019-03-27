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
        <button disabled style={{ backgroundColor: "#04b509" }}>
          <FontAwesomeIcon
            icon="search"
            flip="horizontal"
            rotation={270}
            border
            style={{ marginTop: "5px", color: "white" }}
          />
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
  background: #34d139;
  color: #fff;
  padding: 5px 10px;
  height: 45px;
  border: 2px solid #25a62a;
  border-radius: 1px 40px 40px 1px;
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
  width: 84%;
  height: 25px;
  border: 2px solid green;
  border-radius: 3px;
  @media (max-width: 768px) {
    width: 90%;
  }
`
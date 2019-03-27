import React from 'react';
import styled from 'styled-components';
import { InputText } from 'styles/ComponentsStyled';
import { Row, Column } from 'styles/GridStyled';

const Preferences = ({
  submitFilter,
  eraseFilter,
  setFilters,
  minVolume,
  maxVolume,
  minAdwords,
  maxAdwords,
  minCPC,
  maxCPC,
  filterKeys,
  eraseKeys
}) => {
  return (
    <div>
      <Row>Volumen de Busqueda</Row>
      <Row>
        <Column md={6} >
          <InputRange
            min='0'
            max='999999'
            type="number"
            placeholder="MIN"
            id="minVolume"
            value={minVolume === 0 ? '' : minVolume}
            onChange={e => setFilters('minVolume', e.target.value)}
          />
        </Column>
        <Column md={6}>
          <InputRange
            min='1'
            max='1000000'
            type="number"
            placeholder="MAX"
            id="maxVolume"
            value={maxVolume === 1000000 ? '' : maxVolume}
            onChange={e => setFilters('maxVolume', e.target.value)}
          />
        </Column>
      </Row>
      <Row>Adwords Competencia (en %)</Row>
      <Row>        
        <Column md={6} >
          <InputRange
            min='0'
            max='99'
            type="number"
            placeholder="MIN"
            id="minAdwords"
            value={minAdwords === 0 ? '' : minAdwords}
            onChange={e => setFilters('minAdwords', e.target.value)}
          />
        </Column>
        <Column md={6} >
          <InputRange
            min='1'
            max='100'
            type="number"
            placeholder="MAX"
            id="maxAdwords"
            value={maxAdwords === 100 ? '' : maxAdwords}
            onChange={e => setFilters('maxAdwords', e.target.value)}
          />
        </Column>
      </Row>
      <Row>CPC Adwords (en € )</Row>
      <Row>        
        <Column md={6} >
          <InputRange
            min='0'
            max='9999.99'
            step='0.01'
            type="number"
            placeholder="MIN"
            id="minCPC"
            value={minCPC === 0 ? '' : minCPC}
            onChange={e => setFilters('minCPC', e.target.value)}
          />
        </Column>
        <Column md={6} >
          <InputRange
            min='0'
            max='9999.99'
            step='0.01'
            type="number"
            placeholder="MAX"
            id="maxCPC"
            value={maxCPC === 10000 ? '' : maxCPC}
            onChange={e => setFilters('maxCPC', e.target.value)}
          />
        </Column>
      </Row>
      <Row>
      <Column md={12}>
      <span
            style={{
              fontSize: "15px",
              padding: "5px",
              margin: "auto",
              fontFamily: "Arial",
              fontWeight: "bold"
            }}
          >
            {" "}
            Palabras claves que contiene
          </span>
        <TextArea
          rows="3"
          placeholder="Ingrese Palabras Claves, una por linea"
          id="filterKeys"
          value={filterKeys}
          onChange={e => setFilters('filterKeys', e.target.value)}
          />
          </Column>
      </Row>
      <Row>
        <Column md={12}>
        <span
            style={{
              fontSize: "15px",
              padding: "5px",
              margin: "auto",
              fontFamily: "Arial",
              fontWeight: "bold"
            }}
          >
            Excluir palabras claves
          </span>
        <TextArea
          rows="3"
          placeholder="Ingrese Palabras Claves a excluir, una por linea"
          id="eraseKeys"
          value={eraseKeys}
          onChange={e => setFilters('eraseKeys', e.target.value)}
          /> 
          </Column>
      </Row>
      <Row>
        <Column>
          <Button onClick={() => eraseFilter()}> Borrar</Button>
        </Column>
        <Column>
          <Button onClick={() => submitFilter()}>Aplicar</Button>
        </Column>
      </Row>
      <hr />
    </div>
  );
};

export default Preferences;

const InputRange = styled(InputText)`
  width: 80%;
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 0px 10px;
  border: 2px solid #04b509;
  margin: auto;
  @media (max-width: 768px) {
    width: 85%;
  }
`;
const Button = styled.button`
  background: #04b509;
  color: white;
  padding: 1px 10px;
  border: 2px solid #04b509;
  border-radius: 10px;
  box-shadow: 1px 2px #888888;
  margin: 5px;
  width: 90%;

  display: block;
`;
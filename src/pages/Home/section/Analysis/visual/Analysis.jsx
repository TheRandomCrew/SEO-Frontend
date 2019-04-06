import React from 'react'
import styled from "styled-components";
import Scramble from '../utils/Scramble';

const Analysis = ({titleName = 'Analisis SEO', advices, styles = {}, phrases}) => {
  return (
    <div>
      <H2>{titleName}</H2>
      <Scramble phrases={phrases}/>
      <div
        style={{
          paddingBottom: "25px",
          textAlign: "justify",
          fontSize: "16px",
          fontWeight: "10px"
        }}
      >
      {advices && advices.map((item, id)=>{
        return <p key={id}>{item.advice}</p>
      })}
        <p>La palabra clave objetivo aparece en la URL de esta pagina.</p>
        <p>La palabra clave objetivo aparece solo en 2(de 3) subtitulos de  tu escrito.  Trata de usarla en al menos un subtitulo mas.</p>
      </div>
    </div>
  )
}

export default Analysis;

const H2 = styled.h2`
    color: ${ props => props.theme.text};
    font-family: "kotori_rosebold";
    font-size: 40px;
    line-height: 30px;
    margin-bottom: 5px;
    padding: 0;

    @media (max-width: 576px) {
        font-size: 40px;
    }
`;
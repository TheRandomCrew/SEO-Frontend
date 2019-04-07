import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scramble from '../utils/Scramble';

const Analysis = ({ titleName = 'Analisis SEO', advices, styles = {}, phrases }) => {
  return (
    <div>
      <H2>{titleName}</H2>
      <Scramble phrases={phrases} />
      <div
        style={{
          paddingBottom: "25px",
          textAlign: "justify",
          fontSize: "16px",
          fontWeight: "10px"
        }}
      >
        {advices && advices.map((item, id) => {
          return <span key={id}>
              <p>
            <BadgeIcon
              icon={item.icon}
              color={item.status}
            />
            {item.advice}
            </p>
          </span>
        })}
        <p>
          <BadgeIcon
            icon='search'
            color='error'
          />
          La palabra clave objetivo aparece en la URL de esta pagina.</p>
        <Thing>
        <BadgeIcon
            icon='search'
            color='error'
          />
          Hola
        </Thing>
        <p>La palabra clave objetivo aparece solo en 2(de 3) subtitulos de  tu escrito.  Trata de usarla en al menos un subtitulo mas.</p>
      </div>
    </div>
  )
}

export default Analysis;

const BadgeIcon = styled(FontAwesomeIcon)`
  color: ${props =>
    (props.color === 'success' && 'blue') || 
    (props.color === 'danger' && 'red') ||
    (props.color === 'warning' && 'yellow') ||
    (props.color === 'error' && 'purple')
  }
`
const Thing = styled.button`
  color: blue;

  ::before {
    content: '🚀';
  }

  :hover {
    color: red;
  }
`

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
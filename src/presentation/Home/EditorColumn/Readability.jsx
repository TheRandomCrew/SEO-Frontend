import React from 'react';
import styled from 'styled-components';
import 'styles/ToolTip.css';

const Readability = ({checkReadability, readability}) => {
  return (
    <div className="tooltip">
            <RoundedButton
                onClick={() => checkReadability()}
            >
                <p>Indice de <br />Legibilidad</p>                
            <span>{readability!==0 && readability}</span>
            </RoundedButton>
            <span className="tooltiptext">
                Analiza que tan facil resulta leer el texto del articulo
            </span>
        </div>
  )
}

export default Readability;

const RoundedButton = styled.button`
    border-radius: 50%;
    padding: 20px;
    display: inline-block;
    background: #2780E3;
    color: #fff;
`

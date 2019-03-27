import React from 'react';
import styled from 'styled-components';
import 'styles/ToolTip.css';

const Readability = ({ checkReadability, readability }) => {
    return (
        <div className="tooltip">
            <RoundedButton
                onClick={() => checkReadability()}
            >
                <p>Indice de <br />Legibilidad</p>
                <span>{readability && readability}</span>
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
    padding: 15px;
    display: block;
    background: #2780e3;
    color: #fff;
    border: 2px solid blue;
    box-shadow: 1px 7px #888888;
    @media (min-width: 600px) and (max-width: 800px) {
        padding: 5px;
    }
`

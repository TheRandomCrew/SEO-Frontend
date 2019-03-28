import React, { useState } from 'react'
import readability from 'readability-meter';
import styled from 'styled-components';
import '../../../style/ToolTip.css';

const Readability = ({ text }) => {
    const [readabilityResult, setReadability] = useState(0);

    const checkReadability = () => {
        if(text!==''){
            const read = Math.floor(readability.grade(text) * 100) / 100
            setReadability(read)
        }
        else{
            console.log('set editor first and save article')
        }
    }
    return (
        <div className="tooltip">
            <RoundedButton
                onClick={() => checkReadability()}
            >
                <p>Indice de <br />Legibilidad</p>
                <span>{readabilityResult && readabilityResult}</span>
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

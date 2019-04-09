import React from 'react'
import { RoundedButton } from '../style/ArticleStyle';
import '../style/ToolTip.css';

const ReadabilityView = ({ checkReadability, readabilityResult }) => {
    return (
        <div className="tooltip">
            <RoundedButton
                onClick={() => checkReadability()}
            >
                <p>Indice de <br />Legibilidad</p>
                <span>{readabilityResult !== 'NaN' && readabilityResult}</span>
            </RoundedButton>
            <span className="tooltiptext">
                Analiza que tan facil resulta leer el texto del articulo
            </span>
        </div>
    )
}

export default ReadabilityView

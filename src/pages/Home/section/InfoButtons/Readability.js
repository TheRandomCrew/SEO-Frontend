import React from 'react'
import readability from 'readability-meter';
import { RoundedButton } from './style/ArticleStyle';
import './style/ToolTip.css';
import {SEOContext} from '../../store/index'

const Readability = () => {
    const [readabilityResult, setReadability] = React.useState(0);
    const {state:{article:{text}}} = React.useContext(SEOContext);

    const checkReadability = () => {
        if(text!==''){
            const read = Math.floor(readability.grade(text) * 100) / 100;
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

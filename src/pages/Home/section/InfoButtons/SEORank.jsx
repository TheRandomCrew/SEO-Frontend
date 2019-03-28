import React from 'react';
import { RoundedButton } from './style/ArticleStyle';
import './style/ToolTip.css';

const SEORank = () => {
  return (
    <div className="tooltip">
            <RoundedButton
                // onClick={() => rankArticle()}
            >
                Puntuacion <br />SEO
            </RoundedButton>
            {/* <span>{rank}</span> */}
            <span className="tooltiptext">
                Analiza toda la informacion de SERP y califica
            </span>
        </div>
  )
}

export default SEORank;
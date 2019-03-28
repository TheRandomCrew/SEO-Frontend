import React from 'react';
import styled from 'styled-components';
import '../../../style/ToolTip.css';

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

const RoundedButton = styled.button`
    border-radius: 50%;
    padding: 20px;
    display: inline-block;
    background: #2780e3;
    color: #fff;
    border: 2px solid blue;
    box-shadow: 1px 7px #888888;
`
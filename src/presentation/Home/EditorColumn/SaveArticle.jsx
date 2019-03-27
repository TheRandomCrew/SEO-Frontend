import React from 'react';
import styled from 'styled-components';
import 'styles/ToolTip.css';

const SaveArticle = ({ saveArticleDB, message }) => {
    return (
        <div className="tooltip">
            <Button
                onClick={() => saveArticleDB()}
            >
                Guardar Articulo
            </Button>
            <span>{message}</span>
            <span className="tooltiptext">
                Colecta toda la informacion de SERP y lo guarda en su usuario
            </span>
        </div>
    )
}

export default SaveArticle;

const Button = styled.button`
    background: #2780e3;
    color: #fff;
    padding: 10px;
    border: 2px solid blue;
    border-radius: 10px;
    box-shadow: 1px 7px #888888;
    margin-bottom: 5px;
`
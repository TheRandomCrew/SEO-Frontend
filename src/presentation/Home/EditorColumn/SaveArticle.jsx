import React from 'react';
import styled from 'styled-components';
import 'styles/ToolTip.css';

const SaveArticle = ({ saveArticle, message }) => {
    return (
        <div className="tooltip">
            <Button
            disabled
                onClick={() => saveArticle()}
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
    background: #2780E3;
    color: #fff;
`
import React from 'react';
import { Button } from './style/ArticleStyle';
import './style/ToolTip.css'

const SaveArticle = ({ saveArticleDB, message }) => {
    return (
        <div className="tooltip">
            <Button
                // onClick={() => saveArticleDB()}
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
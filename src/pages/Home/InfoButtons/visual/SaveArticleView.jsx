import React from 'react'
import { Button } from '../style/ArticleStyle';
import '../style/ToolTip.css'

const SaveArticleView = ({ saveArticleDB, text }) => {
    return (
        <div className="tooltip">
            <Button
                disabled={text ? false : true}
                onClick={() => saveArticleDB()}
            >
                Guardar Articulo
            </Button>
            <span className="tooltiptext">
                Colecta toda la informacion de SERP y lo guarda en su usuario
            </span>
        </div>
    )
}

export default SaveArticleView

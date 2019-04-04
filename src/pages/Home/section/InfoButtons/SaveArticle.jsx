import React, { useContext } from 'react';
import axios from 'axios';
import { SEOContext, DnDContext } from '../../store';
import { Button } from './style/ArticleStyle';
import './style/ToolTip.css'
import globalContext from '../../../globalContext';

const SaveArticle = () => {

    const { state: { article: { text } } } = useContext(SEOContext)
    const { state: { DnDTitleItems, DnDMetaItems } } = useContext(DnDContext);
    const { state: { userID } } = useContext(globalContext)
    const saveArticleDB = () => {
        axios({
            url: 'http://backend.borjamediavilla.com/api/v1/users/' + userID,
            method: 'put',
            crossdomain: true,
            data: {
                lastArticle: {
                    title: DnDTitleItems.map(item => item.key).join(' '),
                    meta: DnDMetaItems.map(item => item.key).join(' '),
                    text
                }
            }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(e=>{
            console.error(e)
        })
    }
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

export default SaveArticle;
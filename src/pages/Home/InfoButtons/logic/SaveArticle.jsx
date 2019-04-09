import React from 'react';
import axios from 'axios';
import SaveArticleView from '../visual/SaveArticleView';

const SaveArticle = ({ title, meta, text, userID }) => {

    const saveArticleDB = () => {
        axios({
            url: 'http://backend.borjamediavilla.com/api/v1/users/' + userID,
            method: 'put',
            crossdomain: true,
            data: {
                lastArticle: {
                    title,
                    meta,
                    text
                }
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.error(e)
            })
    }
    return (
        <SaveArticleView
            saveArticleDB={saveArticleDB}
            text={text}
        />
    )
}

export default SaveArticle;
import React, { useState } from 'react';
import {
    default as SaveArticleView
} from 'presentation/Home/EditorColumn/SaveArticle'
const SaveArticle = ({ article }) => {
    const [message, setMessage] = useState('')
    const saveArticleDB = () => {
        console.log('save',article)
        setMessage('Guardado') // TODO: mix tables and article in order and save to DB
    }
    return (
        <SaveArticleView
            saveArticleDB={saveArticleDB}
            message={message}
        />
    )
}

export default SaveArticle

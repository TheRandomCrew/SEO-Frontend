import React, { useState } from 'react';
import {
    default as SaveArticleView
} from 'presentation/Home/EditorColumn/SaveArticle'
const SaveArticle = ({ article }) => {
    const [message, setMessage] = useState('')
    const saveArticle = () => {
        console.log('save')
        setMessage(article.text) // TODO: order article in order and save to DB
    }
    return (
        <SaveArticleView
            saveArticle={saveArticle}
            message={message}
        />
    )
}

export default SaveArticle

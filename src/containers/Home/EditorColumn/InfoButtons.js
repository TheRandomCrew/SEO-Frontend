import React, { useState, useEffect } from 'react'
import axios from 'axios';
import readability from 'readability-meter'
import InfoButtons from 'presentation/Home/EditorColumn/InfoButtons';

import React from 'react';

const InfoButtons = ({
    setArticle,
    textHtml,
    serpData,
    rankData,
    article
}) => {
    const [newArticle, setNewArticle] = useState('');
    const [message, setMessage] = useState('');

    saveArticle = () => {
        setArticle(newArticle);
        setMessage('Articulo Guardado')
    }

    useEffect(() => {
      return () => {
        setNewArticle(article) // TODO: change this to mix other fields
      }
    },
    [article, ])
    return (
        <InfoButtons
            saveArticle={saveArticle}
            message={message}
            textHtml={textHtml}
            serpData={serpData}
            rankData={rankData}
            article={article}
        />
    )
}

export default InfoButtons;
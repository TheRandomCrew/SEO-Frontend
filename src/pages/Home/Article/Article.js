import React, { useState, useEffect } from 'react'
import h2p from 'html2plaintext'
import ArticleView from './visual/ArticleView'

const Article = ({DnDTitle, DnDMeta, DnDEditor, setPair}) => {
    const [title, setTitle] = useState("");
    const [meta, setMeta] = useState('');
    const [text, setText] = useState('');
    const [IsLastUpdatedEditor, setIsLastUpdatedEditor] = useState(true);
    const [textHtml, setTextHtml] = useState('');

    useEffect(()=>{
        setTitle(title + ' ' + DnDTitle)
    },[DnDTitle])

    useEffect(() => {
        setMeta(meta + ' ' + DnDMeta)
    }, [DnDMeta])

    useEffect(() => {
        setText(text + ' ' + DnDEditor) // what about textHtml
        setIsLastUpdatedEditor(false)
    }, [DnDEditor])

    const set = (key, value) => {
        // TODO: add some sanityzing to value
        if (value !== '') {
            switch (key) {
                case 'title':
                    setTitle(value)
                    break;
                case 'meta':
                    setMeta(value)
                    break;
                case 'textHtml':
                    if (IsLastUpdatedEditor) {
                        setText(h2p(value));
                        setTextHtml(value);
                    }
                    setIsLastUpdatedEditor(true)
                    saveArticle()
                    break;
                default:
                    console.error('the key given is not in this castle')
                    break;
            }
        }
    }

    const saveArticle = () => {
        const newArticle = { title, meta, text, textHtml }
        setPair('article', newArticle);
    }

    return (
        <ArticleView
            set={set}
            saveArticle={saveArticle}
            title={title}
            meta={meta}
            text={text}                 
        />
    )
}

export default Article;

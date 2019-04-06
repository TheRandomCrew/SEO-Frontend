import React, { useState, useContext, useEffect } from 'react'
import h2p from 'html2plaintext'
import ArticleView from './ArticleView'
import { SEOContext, DnDContext } from '../../store'


const Article = () => {
    const [title, setTitle] = useState("");
    const [meta, setMeta] = useState('');
    const [text, setText] = useState('');
    const [IsLastUpdatedEditor, setIsLastUpdatedEditor] = useState(true);
    const [textHtml, setTextHtml] = useState('');

    const { state:
        { DnDTitle, DnDMeta, DnDEditor }
    } = useContext(DnDContext);

    const { actions: { setPair } } = useContext(SEOContext);

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
            title={title}               // internal to be updated with DnD
            meta={meta}                 // meta to be submitted after updated with DnD
            text={text}                 
        />
    )
}

export default Article;

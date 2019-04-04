import React, { useState, useContext, useEffect } from 'react'
import h2p from 'html2plaintext'
import ArticleView from './ArticleView'
import { SEOContext, DnDContext } from '../../store'


const Article = () => {
    const [title, setTitle] = useState('');
    const [meta, setMeta] = useState('');
    const [text, setText] = useState('');
    const [IsLastUpdatedEditor, setIsLastUpdatedEditor] = useState(true);
    const [textHtml, setTextHtml] = useState('');

    const { state:
        { DnDTitleItems, DnDMetaItems, DnDEditorItems }
    } = useContext(DnDContext);

    const { actions: { setPair } } = useContext(SEOContext);

    useEffect(() => {
        const DnDTitle = DnDTitleItems.map(item => item.key).join(' ');
        setTitle(title + DnDTitle)
    }, [DnDTitleItems])

    useEffect(() => {
        const DnDMeta = DnDMetaItems.map(item => item.key).join(' ');
        setMeta(meta + DnDMeta)
    }, [DnDMetaItems])

    useEffect(() => {
        const DnDText = DnDEditorItems.map(item => item.key).join(' ');
        setText(text + ' ' + DnDText) // what about textHtml
        setIsLastUpdatedEditor(false)
    }, [DnDEditorItems])

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
            text={text}                 // Same as beforeDnDTitleItems={state.DnDTitleItems}
        />
    )
}

export default Article;

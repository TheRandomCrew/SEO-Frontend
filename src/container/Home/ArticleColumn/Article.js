import React, { useState,useContext } from 'react'
import h2p from 'html2plaintext'
import {
    default as ArticleView
} from '../../../layout/Home/ArticleColumn/Article'
import { DnDContext, SEOContext } from '../../../store';

const Article = () => {
    const [title, setTitle] = useState('');
    const [meta, setMeta] = useState('');
    const [text, setText] = useState('');
    const [textHtml, setTextHtml] = useState('');

    const { actions: { addKeyword } } = useContext(DnDContext);

    const { actions: { setPair } } = useContext(SEOContext);

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
                    setText(h2p(value));
                    setTextHtml(value)
                    break;
                default:
                    console.error('the key given is not in this castle')
                    break;
            }
        }
    }

    const saveArticle = () => { // TODO: Move up
        const newArticle = { title, meta, text, textHtml }
        setPair('article', newArticle);
    }

    const saveTitle = () => {
        let array = title.split(',').map((item, id) => { //TODO: change items view 'cause is a title not tags
            return ({ key: item, id: item + id })
        })
        addKeyword('title', array);
        setTitle('')
    }

    const saveMeta = () => {
        let array = meta.split(',').map((item, id) => {
            return ({ key: item, id: item + id })
        })
        addKeyword('meta', array)
        setMeta('')
    }

    const saveText = () => {
        let array = text.split(',').map((item, id) => { //TODO: change items view 'cause is a title not tags
            return ({ key: item, id: item + id })
        })
        addKeyword('text', array.join())
        setText('');
        setTextHtml('')
    }

    return (
        <ArticleView
            set={set}
            saveTitle={saveTitle}
            saveMeta={saveMeta}
            saveText={saveText}
            saveArticle={saveArticle}
            title={title}               // internal to be updated with DnD
            meta={meta}                 // meta to be submitted after updated with DnD
            text={text}                 // Same as beforeDnDTitleItems={state.DnDTitleItems}
        />
    )
}

export default Article;

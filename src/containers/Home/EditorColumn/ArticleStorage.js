import React, {useState} from 'react'
import h2p from 'html2plaintext'
import UpperRow from 'presentation/Home/EditorColumn/UpperRow';

const ArticleStorage = ({ setPair, serpData, rankData, article }) => {
    const [title, setTitle] = useState('');
    const [meta, setMeta] = useState('');
    const [text, setText] = useState('');
    const [textHtml, setTextHtml] = useState('')

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

    const saveArticle = () => {
        const article = { title, meta, text }
        setPair('article', article)
    }


    return (
        <UpperRow
            set={set}
            saveArticle={saveArticle}
            title={title}
            meta={meta}
            text={text}
            textHtml={textHtml}
            serpData={serpData}
            rankData={rankData}
        />
    )
}

export default ArticleStorage

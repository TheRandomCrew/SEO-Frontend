import React from 'react';
import { Row } from '../../style/GridStyles';
import Editor from '../logic/Editor';
import DnD from '../../DnD';
import { InputText, TextArea, ClearFix } from '../style/components';

const ArticleView = ({
    set,
    saveArticle,
    title,
    meta,
    text
}) => {

    const WordCount = (s) => {
        return s.split(' ') 
            .filter(function (n) { return n !== '' })
            .length;
    }

    return (
        <div>
            <Row>
                <DnD
                    items={[]}
                    droppableId='title'
                >
                <br/>
                    <InputText
                        placeholder="Escribe el Titulo SEO"
                        onChange={e => set('title', e.target.value)}
                        value={title}
                    />
                </DnD>
            </Row>
            <Row>
                <DnD
                    items={[]}
                    droppableId="meta"
                >
                    <TextArea
                        placeholder="Escribe la meta descripcion SEO"
                        onChange={e => set("meta", e.target.value)}
                        value={meta}
                    />
                </DnD>
            </Row>
            <Row>
                <ClearFix>
                    <DnD
                        items={[]}
                        droppableId="editor"
                    >
                        <Editor
                            set={set}
                            text={text}
                            saveArticle={saveArticle}
                        />
                    </DnD>
                </ClearFix>
            </Row>
            <Row>
                <span>Numero de Palabras {WordCount(text)}</span>
            </Row>
            {/* <Row>
                <span>Palabras Claves Anadidas {DnDMetaItems.filter(i => i !== '').length}</span>
            </Row> */}
        </div>
    )
}

export default ArticleView;
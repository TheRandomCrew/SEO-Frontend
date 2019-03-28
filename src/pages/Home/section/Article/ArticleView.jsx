import React from 'react';
import styled from 'styled-components';
import { Row } from '../../style/GridStyles';
import { SEOContext, DnDContext } from '../../store';
import Editor from './Editor';
import DnD from '../../DnD';

const ArticleView = ({
    set,
    saveArticle,
    saveTitle,
    saveMeta,
    title,
    meta,
    // text
}) => {
    const { state: { DnDTitleItems, DnDMetaItems } } = React.useContext(DnDContext);
    const { state: { article: { text } } } = React.useContext(SEOContext);

    const WordCount = (s) => {
        return s.split(' ')
            .filter(function (n) { return n !== '' })
            .length;
    }

    return (
        <>
            <Row>
                <DnD
                    items={DnDTitleItems}
                    droppableId='title'
                >
                    <InputText
                        placeholder="Escribe el Titulo SEO"
                        onChange={e => set('title', e.target.value)}
                        value={title}
                    />
                    <button onClick={() => saveTitle()}>
                        Agregar Tags
                    </button>
                </DnD>
            </Row>
            <Row>
                <DnD
                    items={DnDMetaItems}
                    droppableId="meta"
                >
                    <TextArea
                        placeholder="Escribe la meta descripcion SEO"
                        onChange={e => set("meta", e.target.value)}
                        value={meta}
                    />
                    <button onClick={() => saveMeta()}>
                        Agregar Tags
                    </button>
                </DnD>
            </Row>
            <Row>
                <ClearFix>
                    <Editor
                        set={set}
                    />
                    <button onClick={() => saveArticle()}>
                        Save
                    </button>
                </ClearFix>
            </Row>
            <Row>
                <span>Numero de Palabras {WordCount(text)}</span>
            </Row>
            <Row>
                <span>Palabras Claves Anadidas {DnDMetaItems.filter(i => i !== '').length}</span>
            </Row>
        </>
    )
}

export default ArticleView;

const ClearFix = styled.div`
    overflow: auto;
`;

const InputText = styled.input`
  border: 1px solid #999;
  padding: 0.5rem;
  margin-bottom: 3px;
  width: 70%;
  height: 25px;
  border: 2px solid grey;
  border-radius: 25px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 0px 10px;
  border: 2px solid #04b509;
  margin: auto;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

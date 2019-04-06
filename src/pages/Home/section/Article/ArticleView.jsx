import React from 'react';
import styled from 'styled-components';
import { Row } from '../../style/GridStyles';
import Editor from './Editor';
import DnD from '../../DnD';

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

const ClearFix = styled.div`
    overflow: auto; 
    width: 100%;
`;

const InputText = styled.input`
 width: 90%;
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

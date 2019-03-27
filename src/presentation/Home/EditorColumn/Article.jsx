import React, { Fragment } from 'react';
import styled from 'styled-components'
import DroppableAndDraggable from 'containers/Droppable';
import Editor from 'containers/Home/EditorColumn/Editor';
import { Row } from 'styles/GridStyled';
const Article = ({
    set,
    saveArticle,
    saveTitle,
    saveMeta,
    DnDTitleItems,
    DnDMetaItems,
    // DnDEditorItems,
    title,
    meta,
    // text
}) => {
    return (
        <Fragment>
            <Row>
                <DroppableAndDraggable
                    items={DnDTitleItems}
                    droppableId='title'
                >
                    <InputText
                        placeholder="Escribe el Titulo SEO"
                        onChange={e => set('title',e.target.value)} 
                        value={title}
                    />
                    <button onClick={()=>saveTitle()}>
                        Agregar Tags
                    </button>
                </DroppableAndDraggable>
            </Row>
            <Row>
                <DroppableAndDraggable
                    items={DnDMetaItems}
                    droppableId="meta"
                >
                    <TextArea
                        placeholder="Escribe la meta descripcion SEO"
                        onChange={e => set("meta", e.target.value)}
                        value={meta}
                    />
                    <button onClick={()=>saveMeta()}>
                        Agregar Tags
                    </button>
                </DroppableAndDraggable>
            </Row>
            <Row>
                <ClearFix>
                    <Editor
                        set={set}
                    />
                    <button onClick={()=>saveArticle()}>
                        Save
                    </button>
                </ClearFix>
            </Row>
        </Fragment>
    )
}

export default Article

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
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
    text
}) => {
    const WordCount = (s) => {
        return s.split(' ')
            .filter(function (n) { return n !== '' })
            .length;
    }
    return (
        <Fragment>
            <Row>
                <DroppableAndDraggable
                    items={DnDTitleItems}
                    droppableId='title'
                >
                    <input
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
                    <input
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
            <Row>Numero de Palabras {WordCount(text)}</Row>
            <Row>Palabras Claves Anadidas {DnDMetaItems.length}</Row>
        </Fragment>
    )
}

export default Article

const ClearFix = styled.div`
    overflow: auto;
`
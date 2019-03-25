import React, { Fragment } from 'react';
import styled from 'styled-components'
import DroppableAndDraggable from 'containers/Droppable';
import Editor from 'containers/Home/EditorColumn/Editor';
import { Row } from 'styles/GridStyled';
const Article = ({
    set,
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
                    <input
                        placeholder="Escribe el Titulo SEO" // debe cambiar DnDTitleItems en state/DND
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
            {/* <DroppableAndDraggable items={metaItems} droppableId="meta" /> */}
            <Row>
                <ClearFix>
                    <Editor
                        set={set}
                    />
                </ClearFix>
            </Row>
        </Fragment>
    )
}

export default Article

const ClearFix = styled.div`
    overflow: auto;
`
import React, { Fragment } from 'react';
import styled from 'styled-components'
import DroppableAndDraggable from 'containers/Droppable';
import Editor from 'utils/Editor';
import { Row } from 'styles/GridStyled';
const Article = ({
    DnDTitleItems,
    // DnDMetaItems,
    // DnDEditorItems
}) => {
    return (
        <Fragment>
            <Row>
                <DroppableAndDraggable
                    items={DnDTitleItems}
                    droppableId="title"
                >
                    <input
                        placeholder="Escribe el Titulo SEO"
                    // onChange={e => onChangeState("articleKeywords", e.target.value, "titleInput")}
                    // value={isArticleTitleArray ? JSON.stringify(lowerItems.map(i => i.content)) : articleKeywords}
                    />
                </DroppableAndDraggable>
            </Row>
            {/* <DroppableAndDraggable items={metaItems} droppableId="meta" /> */}
            <Row>
                <ClearFix>
                <Editor />
                </ClearFix>
            </Row>
        </Fragment>
    )
}

export default Article

const ClearFix = styled.div`
    overflow: auto;
`
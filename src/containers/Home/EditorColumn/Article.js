import React from 'react'
import { default as ArticleView } from 'presentation/Home/EditorColumn/Article';
import DNDContext from 'state/DNDContext';
const { Consumer } = DNDContext;

const Article = () => {
    return (
        <Consumer>
            {({ state }) => (
                <ArticleView
                    DnDTitleItems={state.DnDTitleItems}
                    DnDMetaItems={state.DnDMetaItems}
                    DnDEditorItems={state.DnDEditorItems}
                    DnDTargetID={state.DnDTargetID}
                />
            )}
        </Consumer>
    )
}

export default Article

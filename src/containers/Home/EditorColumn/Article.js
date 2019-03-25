import React from 'react';
import DNDContext from 'state/DNDContext';
import ArticleStorage from './ArticleStorage';

const { Consumer } = DNDContext;

const Article = ({ setPair }) => {
    return (
        <Consumer>
            {({ state, actions }) => (
                <ArticleStorage
                    setPair={setPair}
                    addKeyword={actions.addKeyword}
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

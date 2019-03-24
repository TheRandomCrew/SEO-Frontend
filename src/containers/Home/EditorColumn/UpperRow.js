import React from 'react'
import appContext from 'state/appContext';
import ArticleStorage from './ArticleStorage';

const { Consumer } = appContext;

const UpperRow = () => {
    return (
        <Consumer>
            {({ state, actions }) => (
                <ArticleStorage
                    setPair={actions.setPair}
                    serpData={state.serpData}
                    rankData={state.rankData}
                    article={state.article}
                />
            )}
        </Consumer>
    )
}

export default UpperRow

import React from 'react'
import appContext from 'state/appContext';
import {
    default as UpperRowView
} from 'presentation/Home/EditorColumn/UpperRow';

const { Consumer } = appContext;

const UpperRow = () => {
    return (
        <Consumer>
            {({ state, actions }) => (
                <UpperRowView
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

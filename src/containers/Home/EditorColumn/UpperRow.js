import React from 'react'
import { default as UpperRowView } from 'presentation/Home/EditorColumn/UpperRow';
import AppState from 'state/App';

const { Consumer } = AppState;

const UpperRow = () => {
    return (
        <Consumer>
            {({ state, actions }) => (
                <UpperRowView
                    DnDTitleItems={state.DnDTitleItems}
                />
            )}
        </Consumer>
    )
}

export default UpperRow

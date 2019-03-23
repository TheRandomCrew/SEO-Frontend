import React from 'react'
import { default as UpperRowView } from 'presentation/Home/EditorColumn/UpperRow';
import DNDContext from 'state/DNDContext';

const { Consumer } = DNDContext;

const UpperRow = () => {
    return (
        <Consumer>
            {({ state }) => (
                <UpperRowView
                    DnDTitleItems={state.DnDTitleItems}
                />
            )}
        </Consumer>
    )
}

export default UpperRow

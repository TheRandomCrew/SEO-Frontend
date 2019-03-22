import React from 'react'
import appContext from 'state/appContext';
import SerpTableHeaderSelect from './SerpTableHeaderSelect';

const {Consumer } = appContext;

const SerpTableHeader = () => {
  return (
    <Consumer>
      {({ state, actions }) => (
        <SerpTableHeaderSelect 
          serpData={state.serpData}
          set={actions.setPair}
        />
      )}
    </Consumer>
  )
}

export default SerpTableHeader;

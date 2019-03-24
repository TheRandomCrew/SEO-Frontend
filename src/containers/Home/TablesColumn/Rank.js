import React from 'react';

import appContext from 'state/appContext';
import RankTable from './RankTable';

const { Consumer } = appContext;

const Rank = () => {
  return (
    <Consumer>
      {({ state }) => (
          <RankTable
            rankData={state.rankData}
          />
      )}
      </Consumer>
  )
}

export default Rank

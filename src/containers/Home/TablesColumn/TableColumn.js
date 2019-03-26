import React from 'react';
import DNDContext from 'state/DNDContext';
import Tables from './Tables';

const { Consumer } = DNDContext;

const TableColumn = () => {
  return (
    <Consumer>
      {({ state }) => (
        <Tables
          items={state.DnDTableItems}
        />
      )}
    </Consumer>
  )
}

export default TableColumn;
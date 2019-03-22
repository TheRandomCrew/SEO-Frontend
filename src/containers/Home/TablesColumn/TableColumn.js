import React from 'react';
import {
  default as TableColumnView
} from 'presentation/Home/TablesColumn/TableColumn';
import DNDContext from 'state/DNDContext';

const { Consumer } = DNDContext;

const TableColumn = () => {
  return (
    <Consumer>
      {({ state }) => (
        <TableColumnView
          items={state.DnDTableItems}
          DnDTargetID={state.DnDTargetID}
        />
      )}
    </Consumer>
  )
}

export default TableColumn;
import React from 'react';
import {
  default as TableColumnView
} from 'presentation/Home/TablesColumn/TableColumn';
import appContext from 'state/appContext';

const { Consumer } = appContext;

const Tables = ({ items }) => {
  return (
    <Consumer>
      {({ state }) => (
        <TableColumnView
          items={items}
          hidden={state.showTables}
        />
      )}
    </Consumer>
  )
}

export default Tables;

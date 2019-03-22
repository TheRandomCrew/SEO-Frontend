import React from 'react'
import EditorColumn from './EditorColumn/EditorColumn';
import TableColumn from 'containers/Home/TablesColumn/TableColumn';
import { Grid, Column } from 'styles/GridStyled';

const SERP = ({ hide }) => {
    return (
        <Grid>
            <Column md={5} hidden={hide}>
                <TableColumn />
            </Column>
            <Column >
                <EditorColumn />
            </Column>
        </Grid>
    )
}

export default SERP

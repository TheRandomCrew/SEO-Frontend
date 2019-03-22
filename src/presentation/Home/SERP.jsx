import React from 'react'
import styled from 'styled-components'
import EditorColumn from './EditorColumn/EditorColumn';
import TableColumn from 'containers/Home/TablesColumn/TableColumn';

const SERP = ({ hide }) => {
    return (
        <Grid>
            <ColThird hidden={hide}>
                <TableColumn/>
            </ColThird>
            <Col>
                <EditorColumn/>
            </Col>
        </Grid>
    )
}

export default SERP

const Grid = styled.div`
    display: flex;
`
const ColThird = styled.div`
    flex: 0 0 30%;
`

const Col = styled.div`
    flex:1;
`
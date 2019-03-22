import React from 'react'
import styled from 'styled-components'
import DroppableAndDraggable from 'containers/Droppable';
import { Bordered } from 'styles/GridStyled';
import Search from 'containers/Home/TablesColumn/Search';
import SerpTableHeader from 'containers/Home/TablesColumn/SerpTableHeader';

const TableColumn = ({ items }) => {
    return (
        <Bordered>
            <Grid>
                <Search />  
            </Grid>
            <Grid>
                <SerpTableHeader/>
            </Grid>
            <Grid>
                <OverflowContainer>
                    <OverflowY>
                        <DroppableAndDraggable items={items} droppableId="keywords" />
                        {/* aca */}
                        SERPTable
                    </OverflowY>
                    <span>TOP 10 DE LAS PALABRAS CLAVE PRINCIPAL</span>
                    <OverflowY>
                        {/* aca */}
                        RankTable
                    </OverflowY>
                </OverflowContainer>
            </Grid>
        </Bordered>
    )
}

export default TableColumn

const Grid = styled.div`
    display: flex;
`

const OverflowContainer = styled.div`
    width: 100%;
`

const OverflowY = styled.div`
    overflow-y: scroll;
`
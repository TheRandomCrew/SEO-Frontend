import React from 'react';
import styled from 'styled-components';
import SERPTableHeader from './SERPTableHeader';
import DnD from '../DnD';
import { DnDContext } from '../store';

const SERP = () => {
    const { state: { DnDTableItems } } = React.useContext(DnDContext);
    return (
        <>
            <SERPTableHeader />
            <OverflowY>
                <DnD
                    items={DnDTableItems}
                    droppableId="keywords"
                />
            </OverflowY>
        </>
    )
}

export default SERP;

const OverflowY = styled.div`
    height: 50vh;
    overflow-y: scroll;
`;

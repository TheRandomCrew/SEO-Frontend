import React from 'react';
import styled from 'styled-components';
import {SEOContext} from '../store';
import {Grid} from '../style/GridStyles'
// import { SERP } from '../section/SERP';
import {Rank, SERP} from '.'

const Tables = () => {
    const { state: { showTables } } = React.useContext(SEOContext);
    return (
        <div hidden={!showTables}>
            <Grid>
                <OverflowContainer>
                    <SERP />
                    <Rank />
                </OverflowContainer>
            </Grid>
        </div>
    )
}

export default Tables;

const OverflowContainer = styled.div`
    width: 100%;
`;

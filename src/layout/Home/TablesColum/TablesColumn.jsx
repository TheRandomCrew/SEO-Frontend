import React from 'react';
import styled from 'styled-components';
import { Bordered, Grid } from '../../../style/GridStyles';
import { SEOContext, DnDContext } from '../../../store';
import Filter from '../../../container/Home/TablesColum/Filter';
import SearchForm from '../../../container/Home/TablesColum/SearchForm';
import RankTable from './RankTable';
import SerpTableHeader from './SerpTableHeader';
import DnD from '../../../container/Home/DnD';

const TablesColumn = () => {
    const [hide, setHide] = React.useState(false);

    const { state: { showTables } } = React.useContext(SEOContext);

    const { state: { DnDTableItems } } = React.useContext(DnDContext);

    return (
        <Bordered>
            <Grid>
                <SearchForm />
            </Grid>
            <Grid>
                <Button onClick={() => setHide(!hide)}>Filtrar</Button>
            </Grid>
            <Grid>
                {
                    hide && <Filter
                        setHide={setHide}
                    />
                }
            </Grid>
            <div hidden={!showTables}>
                {/* <Grid>
                </Grid> */}
                <Grid>
                    <OverflowContainer>
                        <SerpTableHeader />
                        <OverflowY>
                            <DnD
                                items={DnDTableItems}
                                droppableId="keywords"
                            />
                        </OverflowY>
                        <span>TOP 10 DE LAS PALABRAS CLAVE PRINCIPAL</span>
                        <OverflowY>
                            <RankTable />
                        </OverflowY>
                    </OverflowContainer>
                </Grid>
            </div>
        </Bordered>
    )
}

export default TablesColumn;

const Button = styled.button`
    background: #3FB618;
    color: #fff;
`;

const OverflowContainer = styled.div`
    width: 100%;
`;

const OverflowY = styled.div`
    height: 50vh;
    overflow-y: scroll;
`;

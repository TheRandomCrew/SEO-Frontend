import React from 'react'
import styled from 'styled-components';
import { Grid } from '../style/GridStyles';
import SearchForm from './SearchForm';
import Filter from './Filter';

const Search = () => {
    const [hideFilter, setHideFilter] = React.useState(false);
    return (
        <>
            <Grid>
                <SearchForm />
            </Grid>
            <Grid>
                <Button onClick={() => setHideFilter(!hideFilter)}>Filtrar</Button>
            </Grid>
            <div hidden={!hideFilter}>
                <Grid>
                    <Filter
                        setHide={setHideFilter}
                    />
                </Grid>
            </div>
        </>
    )
}

export default Search;


const Button = styled.button`
    background: #3FB618;
    color: #fff;
`;

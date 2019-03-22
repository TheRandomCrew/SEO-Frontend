import React from 'react'
import {
    default as SearchBoxView
} from 'presentation/Home/TablesColumn/SearchForm/SearchBox';

const SearchBox = (query, setQuery, ip) => {
    return (
        <div>
            <SearchBoxView
                query={query}
                setQuery={setQuery}
            />
        </div>
    )
}

export default SearchBox

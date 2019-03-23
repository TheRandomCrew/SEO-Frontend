import React from 'react';
import Filter from './Filter';

const Preferences = ({ setFilter, setHide, serpData }) => {
    const applyFilter = (filter) => {
        setFilter('filter',filter);
        setHide(false)
    }

    const resetFilter = (filter) => {
        setFilter('filter',filter);
    }
    return (
        <Filter
            serpData={serpData} // TODO: make eraseWords and FilterWords a typeahead input
            applyFilter={applyFilter}
            resetFilter={resetFilter}
        />
    )
}

export default Preferences

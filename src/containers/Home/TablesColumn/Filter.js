import React, { useState } from 'react'
import {
    default as PreferencesView
} from 'presentation/Home/TablesColumn/SearchForm/Preferences';

const Filter = ({ applyFilter, resetFilter }) => {
    const [minVolume, setMinVolume] = useState(0)
    const [maxVolume, setMaxVolume] = useState(1000000)
    const [minAdwords, setMinAdwords] = useState(0)
    const [maxAdwords, setMaxAdwords] = useState(100)
    const [minCPC, setMinCPC] = useState(0.00)
    const [maxCPC, setMaxCPC] = useState(10000.00)
    const [filterKeys, setFilterKeys] = useState('')
    const [eraseKeys, setEraseKeys] = useState('')
    const [edited, setEdited] = useState(false)

    const setFilters = (key, value) => {
        switch (key) {
            case 'minVolume':
                setMinVolume(Number(value))
                break;
            case 'maxVolume':
                setMaxVolume(Number(value))
                break;
            case 'minAdwords':
                setMinAdwords(Number(value))
                break;
            case 'maxAdwords':
                setMaxAdwords(Number(value))
                break;
            case 'minCPC':
                setMinCPC(parseFloat(value))
                break;
            case 'maxCPC':
                setMaxCPC(parseFloat(value))
                break;
            case 'filterKeys':
                setFilterKeys(value)
                break;
            case 'eraseKeys':
                setEraseKeys(value)
                break;
            default:
                console.error('The key given is not an option')
                break;
        }
        setEdited(true)
    }

    const submitFilter = () => {
        const filter = {
            minVolume,
            maxVolume,
            minAdwords,
            maxAdwords,
            minCPC,
            maxCPC,
            filterKeys,
            eraseKeys
        };
        if (edited) {
            applyFilter(filter)
        }
        else { console.log('Make some changes to Filter before trying to submit') }
    }

    const eraseFilter = () => {
        if (edited) {
            setMinVolume(0);
            setMaxVolume(1000000);
            setMinAdwords(0);
            setMaxAdwords(100);
            setMinCPC(0.00);
            setMaxCPC(10000.00);
            const filter = {
                minVolume,
                maxVolume,
                minAdwords,
                maxAdwords,
                minCPC,
                maxCPC,
                filterKeys,
                eraseKeys
            };
            resetFilter(filter)
        } else { console.log('Make some changes to Filter before trying to erase') }    
    }
    return (
        <div>
            <PreferencesView
                submitFilter={submitFilter}
                eraseFilter={eraseFilter}
                setFilters={setFilters}
                minVolume={minVolume}
                maxVolume={maxVolume}
                minAdwords={minAdwords}
                maxAdwords={maxAdwords}
                minCPC={minCPC}
                maxCPC={maxCPC}
                filterKeys={filterKeys}
                eraseKeys={eraseKeys}
            />
        </div>
    )
}

export default Filter
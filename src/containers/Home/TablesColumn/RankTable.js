import React from 'react'
import {
    default as RantTableView
} from 'presentation/Home/TablesColumn/Tables/RankTable';

const RankTable = ({ rankData }) => {
    return (
        <RantTableView
            rankData={rankData}
        />
    )
}

export default RankTable

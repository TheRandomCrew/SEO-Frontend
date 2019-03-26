import React, {useState, useEffect} from 'react'
import SerpTableHeader from 'presentation/Home/TablesColumn/Tables/SerpTableHeader';

const SerpTableHeaderSelect = (serpData, set) => {
    const [selected, setSelected] = useState([]);
    useEffect(() => {
        setSelected(serpData)
    },[])

    const setSelection = () => {
        set('serpData', selected) // </------- TODO: Selection is new serpData
    }
  return (
    <SerpTableHeader 
        setSelection={setSelection}
        serpData={serpData}
        selected={selected}
    />
  )
}

export default SerpTableHeaderSelect

import React from 'react';
import Autocomplete from 'containers/Home/TablesColumn/Autocomplete';

const TypeAhead = ({setLanguages, languages=[]}) => {
  return (
    <Autocomplete
        suggestions={languages.map(lang => lang.flag + lang.text)}
        placeholder={'🇧🇴Bolivia / Spanish (Latin America) - Español (Latinoamérica)'}
        setLanguages={setLanguages}
      />
  )
}

export default TypeAhead
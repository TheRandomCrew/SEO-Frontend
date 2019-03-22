import React, {Fragment} from 'react';
import Autocomplete from 'containers/Home/TablesColumn/Autocomplete';
import languages from 'utils/languages';

const TypeAhead = () => {
  return (
    <Fragment>      
      <Autocomplete
        suggestions={languages.map(lang => lang.flag + lang.text)}
        placeholder={'🇧🇴Bolivia / Spanish (Latin America) - Español (Latinoamérica)'}
      />
    </Fragment>
  )
}

export default TypeAhead
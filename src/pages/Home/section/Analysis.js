import React from 'react'
import {default as AnalysisModule} from '../Analysis/Analysis'
import { SEOContext } from '../store';

const Analysis = () => {
    const {state:{article}} = React.useContext(SEOContext)
  return (
    <AnalysisModule
        article={article}
    />
  )
}

export default Analysis;

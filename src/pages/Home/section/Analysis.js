import React from 'react'
import {default as AnalysisView} from './Analysis/Analysis'
import { SEOContext } from '../store';

const Analysis = () => {
    const {state:{article}} = React.useContext(SEOContext)
  return (
    <AnalysisView
        article={article}
    />
  )
}

export default Analysis;

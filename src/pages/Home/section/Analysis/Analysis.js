import React from 'react'
import { default as AnalysisView } from './visual/Analysis'
import { getAll } from './utils/getAdvices';
const Analysis = ({ article }) => {
    const advices = getAll(article);
    const phrases = [
        'Mejoremos tu alcalce',
        'Acercandote a tus clientes',
        'Incrementando tu exposicion'
    ];
    return (
        <AnalysisView
            phrases={phrases}
            advices={advices}
        />
    )
}

export default Analysis

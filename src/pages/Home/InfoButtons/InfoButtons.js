import React from 'react'
import { default as InfoButtonsView } from './visual/InfoButtons';

const InfoButtons = ({ title, meta, text, textHtml }) => {
    return (
        <InfoButtonsView
            title={title}
            meta={meta}
            text={text}
            textHtml={textHtml}
        />
    )
}

export default InfoButtons;
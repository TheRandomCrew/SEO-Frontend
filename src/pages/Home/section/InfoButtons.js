import React from 'react'
import { SEOContext } from '../store';
import globalContext from '../../../store/globalContext';

const InfoButtons = () => {
    const {
        state: {
            article: { title, meta, text, textHtml }
        }
    } = React.useContext(SEOContext);
    
    const { state: { userID } } = useContext(globalContext)
    return (
        <InfoButtonsModule
            userID={userID}
            title={title}
            meta={meta}
            text={text}
            textHtml={textHtml}
        />
    )
}

export default InfoButtons

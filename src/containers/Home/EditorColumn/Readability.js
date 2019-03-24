import React, { useState } from 'react'
import readability from 'readability-meter';
import {
    default as ReadabilityView
} from 'presentation/Home/EditorColumn/Readability';

const Readability = ({ textHtml }) => {
    const [readabilityResult, setReadability] = useState(0);

    const checkReadability = () => {
        const read = Math.floor(readability.grade(textHtml) * 100) / 100
        setReadability(read)
    }
    return (
        <ReadabilityView
            checkReadability={checkReadability}
            readability={readabilityResult}
        />
    )
}

export default Readability

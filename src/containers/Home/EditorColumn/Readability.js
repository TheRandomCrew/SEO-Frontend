import React, { useState } from 'react'
import readability from 'readability-meter';
import {
    default as ReadabilityView
} from 'presentation/Home/EditorColumn/Readability';

const Readability = ({ text }) => {
    const [readabilityResult, setReadability] = useState(0);

    const checkReadability = () => {
        if(text!==''){
            const read = Math.floor(readability.grade(text) * 100) / 100
            setReadability(read)
        }
        else{
            console.log('set editor first and save article')
        }
    }
    return (
        <ReadabilityView
            checkReadability={checkReadability}
            readability={readabilityResult}
        />
    )
}

export default Readability

import React from 'react'
import readability from 'readability-meter';
import ReadabilityView from '../visual/ReadabilityView';

const Readability = ({ text='' }) => {
    const [readabilityResult, setReadability] = React.useState(0);

    const checkReadability = () => {
        if (text !== '' || text !== undefined) {
            const read = Math.floor(readability.grade(text) * 100) / 100;
            setReadability(read.toString())
        }
        else {
            console.log('set editor first and save article')
        }
    }
    React.useEffect(() => {
        checkReadability()
    }, [text])
    return (
        <ReadabilityView
            readabilityResult={readabilityResult}
            checkReadability={checkReadability}
        />
    )
}

export default Readability;

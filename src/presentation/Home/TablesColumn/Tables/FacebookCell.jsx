import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FacebookCell = ({ share_count }) => {
    return (
        <p>
            <FontAwesomeIcon icon="share-alt" />{share_count}
        </p>
    )
}

export default FacebookCell

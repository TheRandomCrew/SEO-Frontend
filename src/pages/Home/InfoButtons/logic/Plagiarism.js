import React, { useState } from 'react';
import axios from 'axios';
import PlagiarismView from '../visual/PlagiarismView';

const Plagiarism = ({ text }) => {
    const [loading, setLoading] = useState(false);
    const [plagiarismStatus, setPlagiarismStatus] = useState('')
    const [plagiarism, setPlagiarism] = useState([])

    const checkPlagiarism = () => {
        if (text.length > 0) {
            setLoading(true);
            setPlagiarismStatus('');
            setPlagiarism([]);

            const data = { texto: text }
            axios({
                method: 'post',
                url: `http://backend.borjamediavilla.com/api/v1/serp/verificarTextoAux`,
                data,
                crossdomain: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => {
                const { success, status, message } = resp.data;
                if (success === true) {
                    if (status === 1) {
                        setPlagiarismStatus(message);
                    } else {
                        setPlagiarism(data);
                        setPlagiarismStatus(message);
                    }
                } else {
                    setPlagiarismStatus(message);
                }
                setLoading(false);

            }).catch(error => {
                console.error('copyleaks api error' + JSON.stringify(error))
                setLoading(false);
            });
        } else {
            console.log('Por favor, agregue un texto');
        }
    }

    return (
        <PlagiarismView
            checkPlagiarism={checkPlagiarism}
            loading={loading}
            text={text}
            plagiarism={plagiarism}
            plagiarismStatus={plagiarismStatus}
        />
    )
}

export default Plagiarism;
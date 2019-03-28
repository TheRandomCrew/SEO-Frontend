import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { SEOContext } from '../../../store';
import '../../../style/ToolTip.css';

const Plagiarism = () => {
    const [loading, setLoading] = useState(false);
    const [plagiarismStatus, setPlagiarismStatus] = useState('')
    const [plagiarism, setPlagiarism] = useState([])

    const { state: { article:{text} } } = React.useContext(SEOContext)

    const checkPlagiarism = () => {
        if (text.length > 0) {
            setLoading(true);
            setPlagiarismStatus('');
            setPlagiarism([]);

            const data = { texto: text }
            axios({
                method: 'post',
                url: `http://server.borjamediavilla.com/api/verificarTextoAux`,
                data,
                crossdomain: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => {
                console.log(resp.data)
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

    console.log(plagiarism)

    return (
        <div className="tooltip">
            <Button
                onClick={()=>checkPlagiarism()}
                disabled={loading || text === ''}
            >
                Comprobar Plagio
            </Button>

            {plagiarismStatus && <p>{plagiarismStatus}</p>}

            {loading && <p>Esto podría demorar unos minutos, por favor espere..</p>}

            <span className="tooltiptext">
                Verificar si el texto es plagiado
            </span>
        </div>
    )
}

export default Plagiarism;

const Button = styled.button`
    background: #2780e3;
    color: #fff;
    padding: 10px;
    border: 2px solid blue;
    border-radius: 10px;
    box-shadow: 1px 20px 3px 20px;
    box-shadow: 1px 7px #888888;
`
import React from 'react';
import styled from 'styled-components';
import 'styles/ToolTip.css';

const Plagiarism = ({ 
    checkPlagiarism, 
    plagiarism, 
    plagiarismStatus, 
    text, 
    loading 
}) => {
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
    background: #2780E3;
    color: #fff;
`
import React from 'react';
import styled from 'styled-components';
import 'styles/ToolTip.css'

const ArticleToPDF = ({ ganeratePDF, pdf, loading }) => {
    return (
        <div className="tooltip">
            <Button
            disabled
                onClick={() => ganeratePDF()}
            >
                {loading ? <p>Generando...</p>
                    :
                    <p>Generar PDF <br />para Descargar Articulo</p>
                }
            </Button>
            <span>
                {pdf && <a
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Descargar Pdf
                </a>}
            </span>
            <span className="tooltiptext">
                Colecta toda la informacion de SERP y lo exporta  a PDF
            </span>
        </div>
    )
}

export default ArticleToPDF;

const Button = styled.button`
    background: #2780E3;
    color: #fff;
`
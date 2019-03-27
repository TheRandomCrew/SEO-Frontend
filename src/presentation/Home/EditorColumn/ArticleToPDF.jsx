import React from 'react';
import styled from 'styled-components';
import 'styles/ToolTip.css'

const ArticleToPDF = ({ generatePDF, pdf, loading }) => {
    return (
        <div className="tooltip">
            <Button
                onClick={() => generatePDF()}
            >
                {loading ? (
            <p>Generando...</p>
          ) : (
            <p>
              Generar PDF <br />
              <span style={{ fontSize: "12px" }}>
                {" "}
                para Descargar Articulo{" "}
              </span>
            </p>
          )}
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
    background: #2780e3;
    color: #fff;
    padding: 0px 10px;
    border: 2px solid blue;
    border-radius: 10px;
    box-shadow: 1px 20px 3px 20px;
    box-shadow: 1px 7px #888888;
    margin: auto;
`
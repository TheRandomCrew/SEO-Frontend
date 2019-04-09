import React from 'react'
import { Button } from '../style/ArticleStyle';
import '../style/ToolTip.css';

const ArticleToPDF = ({ generatePDF, loading, pdf }) => {
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

export default ArticleToPDF

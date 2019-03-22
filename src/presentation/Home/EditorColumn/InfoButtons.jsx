import React from 'react'
import styled from 'styled-components'
import { Row } from 'styles/GridStyled';

const InfoButtons = ({ 
    saveArticle,
    readabilityResult,
    convertHtmlToPdf,
    pdf,
    loadingPDF,
    loadingCopyleaks,
    copyLeaksStatus,
    checkCopyLeaks,
    editorString }) => {
    return (
        <Row>
            <Button
            // onClick={() => this.saveArticle()} size="sm"
            >
                Guardar Articulo
            </Button>
            <Button
            // onClick={() => this.convertHtmlToPdf()} size="sm"
            >
                {loadingPDF ? <p>Generando...</p> 
                : 
                <p>Generar PDF <br />para Descargar Articulo</p>
                }
            </Button>
            {pdf && <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
            >
                Descargar Pdf
                </a>}
            <RoundedButton
            >
                Puntuacion <br />SEO
            </RoundedButton>
            <RoundedButton
                // onClick={() => this.readabilityArticle()}
            >
                <p>Indice de <br />Legibilidad</p>
                {/* {readabilityResult && readabilityResult} */}
            </RoundedButton>
            <Button
                size="sm"
                // onClick={checkCopyLeaks()}
                disabled={loadingCopyleaks || editorString === ''}
            >
                Comprobar Plagio
            </Button>

            {/* {copyLeaksStatus !== '' && <p>{copyLeaksStatus}</p>} */}

            {/* {arrayPlagios.length !== 0 &&
                    <p> {arrayPlagios} </p>
                } */}

            {/* {loadingCopyleaks && <p>Esto podría demorar unos minutos, por favor espere..</p>} */}

        </Row>
    )
}

export default InfoButtons

const Button = styled.button`
    background: #2780E3;
    color: #fff;
`

const RoundedButton = styled.button`
    border-radius: 50%;
    padding: 20px;
    display: inline-block;
    background: #2780E3;
    color: #fff;
`
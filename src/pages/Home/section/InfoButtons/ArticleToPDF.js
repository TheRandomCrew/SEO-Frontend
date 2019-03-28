import React, {useState} from 'react';
import { SEOContext } from '../../store';
import { Button } from './style/ArticleStyle';
import './style/ToolTip.css';

const ArticleToPDF = () => {
    const [pdf, setPdf] = useState('')
    const [loading, setLoading] = useState(false);

    const { state: { article:{textHtml} } } = React.useContext(SEOContext)

    const convertHtmlToPdf = (html) => {
        fetch('https://v2018.api2pdf.com/chrome/html', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': '222c59ba-af7f-468d-9951-e4671bc5bee1'
            },
            body: JSON.stringify({ html, inlinePdf: true, fileName: 'test.pdf' })
        }).then(res => res.json())
            .then(res => {
                setLoading(false)
                setPdf(res.pdf)
            }
            );
    }

    const generatePDF=() => {
        // TODO: Mix here title, meta, text and tables
        if (textHtml!==''){   
            convertHtmlToPdf(textHtml)
        }
        else{
            console.log('set editor text first and save article')
        }
    }
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
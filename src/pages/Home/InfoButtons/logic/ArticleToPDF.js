import React, { useState } from 'react';
import { default as ExportPDF } from '../visual/ArticleToPDF';

const ArticleToPDF = ({ title, meta, textHtml }) => {
    const [pdf, setPdf] = useState('')
    const [loading, setLoading] = useState(false);

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
            })
            .catch(e => {
                console.error(e)
                setLoading(false)
            })
    }

    const generatePDF = () => {
        // TODO: Mix here title, meta, text and tables
        setLoading(true)
        if (textHtml !== '') {
            convertHtmlToPdf(`<h1>${title}</h1><br/><span>${meta}</span><br/>` + textHtml)
        }
        else {
            console.log('set editor text first and save article')
        }
    }

    return (
        <ExportPDF
            generatePDF={generatePDF}
            loading={loading}
            pdf={pdf}
        />
    )
}

export default ArticleToPDF;
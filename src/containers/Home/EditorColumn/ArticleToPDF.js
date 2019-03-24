import React, {useState} from 'react';
import {
    default as ArticleToPDFView
} from 'presentation/Home/EditorColumn/ArticleToPDF';

const ArticleToPDF = ({textHtml }) => {
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
            }
            );
    }

    const generatePDF=() => {
        // TODO: Mix here title, meta, text and tables
        convertHtmlToPdf(textHtml)
    }
    return (
        <ArticleToPDFView
            generatePDF={generatePDF}
            pdf={pdf}
            loading={loading}
        />
    )
}

export default ArticleToPDF;
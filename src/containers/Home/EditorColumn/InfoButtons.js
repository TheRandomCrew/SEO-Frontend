import React, { Component } from 'react'
import axios from 'axios';
import readability from 'readability-meter'
import InfoButtons from 'presentation/Home/EditorColumn/InfoButtons';

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            readabilityResult: '',
            pdf: undefined,
            loading: false,
            comprobandoPlagio: false,
            arrayPlagios: [],
            mensajePlagio: ''
        }
    }
    saveArticle = () => {
        // upload to DB
        console.log(this.props.html2plaintext)
    }
    readabilityArticle = () => {
        let read = Math.floor(readability.grade(this.props.html2plaintext) * 100) / 100
        this.setState({ readabilityResult: read })
    }
    generatePDF = () => {
        this.convertHtmlToPdf()
        this.setState({ loading: true })
    }
    convertHtmlToPdf() {
        fetch('https://v2018.api2pdf.com/chrome/html', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': '222c59ba-af7f-468d-9951-e4671bc5bee1'
            },
            body: JSON.stringify({ html: `<h1>SERP</h1>` + this.props.htmlEditor, inlinePdf: true, fileName: 'test.pdf' })
        }).then(res => res.json())
            .then(res => {
                this.setState({ pdf: res.pdf, loading: false })
            }
            );
    }

    checkProgressCopyLeaks = (ProcessId) => {
        let data = { ProcessId }
        this.setState({
            comprobandoPlagio: true,
        });
        axios({
            method: 'post',
            url: `http://server.borjamediavilla.com/api/checkProgressCopyLeaks`,
            data,
            crossdomain: true
        })
            .then((resp) => {
                const { success, status, message, datos, ProcessId } = resp.data;
                if (success === true) {
                    console.log(resp.data)
                    const { Status, ProgressPercents } = datos;
                    if (status === 1) {
                        this.setState({
                            mensajePlagio: message,
                            CopyLeaksStatus: Status,
                            ProgressPercents,
                            ProcessId: ProcessId
                        });
                    } else {
                        this.setState({
                            CopyLeaksStatus: Status,
                            ProgressPercents,
                            // arrayPlagios: data,
                            mensajePlagio: message
                        });
                    }
                } else {
                    this.setState({
                        mensajePlagio: message
                    })
                }

                this.setState({
                    comprobandoPlagio: false
                })
            })
            .catch(e => {
                console.error(e)
            })
    }

    render() {
        const {
            readabilityResult,
            pdf,
            loading,
            comprobandoPlagio,
            mensajePlagio } = this.state;
        let textoVerificar = this.props.html2plaintext
        const comprobarPlagio = () => {
            if (textoVerificar.length > 0) {

                //Seteo lo necesario para arrancar la función
                this.setState({
                    comprobandoPlagio: true,
                    arrayPlagios: [],
                    mensajePlagio: ''
                });
                const data = { texto: textoVerificar }
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
                            this.setState({
                                mensajePlagio: message
                            });
                        } else {
                            this.setState({
                                arrayPlagios: data,
                                mensajePlagio: message
                            });
                        }
                    } else {
                        this.setState({
                            mensajePlagio: message
                        })
                    }

                    this.setState({
                        comprobandoPlagio: false
                    })

                }).catch(error => {
                    console.error('copyleaks api error' + JSON.stringify(error))
                    this.setState({
                        comprobandoPlagio: false
                    })
                });
            } else {
                alert('Por favor, agregue un texto');
            }
        }
        return (
            <InfoButtons
                readabilityResult={readabilityResult}
                pdf={pdf}
                loading={loading}
                comprobandoPlagio={comprobandoPlagio}
                mensajePlagio={mensajePlagio}
                checkCopyLeaks={checkCopyLeaks}
                textoVerificar={textoVerificar}
            />
        )
    }
}
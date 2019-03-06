import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap';
import Editor from './Editor/Editor';

const EditorView = ({set}) => {
    return (
        <Row>
            <Col lg="9">
                <textarea rows='2' style={{ width: "100%" }} placeholder="Escribe la meta descripcion SEO" /><br />
                url:
                <Editor set={set}/>
                <Card>Numero de Palabras</Card>
                <Card>Palabras Claves Anadidas</Card>
            </Col>
            <Col lg="2">
                <Row className="justify-content-md-center">
                    <Button size="sm">
                        Guardar Articulo
                                        </Button>
                    <Button size="sm">
                        Descargar Articulo
                                        </Button>
                    <Button style={{ borderRadius: "50%", padding: "20px", display: "inline-block" }}>
                        Puntuacion <br />SEO
                                        </Button>
                    <Button style={{ borderRadius: "50%", padding: "20px", display: "inline-block" }}>
                        Indice de <br />Legibilidad
                                        </Button>
                    <Button size="sm">
                        Comprobar Plagio
                                        </Button>
                </Row>
            </Col>
        </Row>
    )
}
export default EditorView;
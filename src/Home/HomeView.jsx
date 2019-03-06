import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap';

const HomeView = ({
    searchForm,
    serpTable,
    rankTable,
    EditorView,
    Analysis,
    isSearching,
    toggle,
    expand
}) => {
    return (
        <div style={{ marginTop: '45px', padding: 20 }}>
            <Row className="justify-content-md-center">
                <Button onClick={() => toggle('expand')} size="sm">
                    Expandir editor de textos
                    </Button>
            </Row>
            <Row>
                <Col hidden={expand} lg="4">
                    <Row>
                        <Card>
                            {searchForm}
                        </Card>
                    </Row>
                    {isSearching ?
                        <Row style={{ height: "100vh" }}>
                            <Col className="h-50 d-inline-block" style={{ overflowY: "scroll" }} lg="12">
                                <Card>
                                    {serpTable}
                                </Card>
                            </Col>
                            <span>TOP 10 DE LAS PALABRAS CLAVE PRINCIPAL</span>
                            <Col className="h-50 d-inline-block" style={{ overflowY: "scroll" }} lg="12">
                                <Card>
                                    {rankTable}
                                </Card>
                            </Col>
                        </Row> : null
                    }
                </Col>
                <Col>
                    <Card>
                        {EditorView}
                    </Card>
                    <Card>
                        <Row>
                            {Analysis}
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default HomeView
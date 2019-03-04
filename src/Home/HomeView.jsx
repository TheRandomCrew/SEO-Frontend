import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const HomeView = ({ searchForm, exportArea, overview, serpTable, rankTable, isSearching }) => {
    return (
        <React.Fragment><Container>
            <Row className="justify-content-md-center">
                <Col xs='12' sm='12' lg="10">
                    <h1 className="display-4" style={{ marginTop: '45px' }}>KeyWord Tool</h1>
                    <p className="lead">
                        Es la Mejor Alternativa para el Planificador de Palabras Claves de
                        Googgle y Otras Herramientas de Palabra Claves
            </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs='12' sm='12' lg="10">
                    {searchForm}
                </Col>
            </Row>
            {isSearching ?
                <React.Fragment>
                    {/* <Row className="justify-content-md-center">
                        <Col xs='12' sm='12' lg="10">
                            {exportArea}
                        </Col>
                    </Row> */}
                    <Row className="justify-content-md-center">
                        <Col xs='12' sm='12' lg="10">
                            {overview}
                        </Col>
                    </Row>
                </React.Fragment> :
                <Container>
                    <h3>
                        Escribe en la caja de busqueda para mostrar resultados
                    </h3>
                </Container>
            }
        </Container>
            <hr />
            {isSearching ?
                <Row noGutters>
                    <Col xs='16' sm='16' md='6'>
                        {exportArea}
                        {serpTable}
                    </Col>
                    <Col xs='16' sm='16' md='6'>
                        {rankTable}
                    </Col>
                </Row> : null
            }
        </React.Fragment>
    )
}

export default HomeView

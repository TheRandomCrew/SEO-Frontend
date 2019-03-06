import React, { Component } from 'react'
import {  Droppable, Draggable } from 'react-beautiful-dnd';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

export default class DNDLayoutView extends Component {
    render() {
        const {
            yourName,
            recipientName,
            items,
            lowerItems,
            hidden,
            html2plaintext,
            isArticleTitleArray,
            articleKeywords,
            toggleMessage,
            onChangeState,
            searchForm,
            serpTable,
            rankTable,
            EditorView,
            Analysis,
            isSearching,
            toggle,
            expand
        } = this.props;
        return (
            <Container style={{ marginTop: '45px', padding: 20 }}>
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
                        <Droppable droppableId="droppable1">
                            {(provided, snapshot) => (
                                <div style={{ backgroundColor: snapshot.isDraggingOver && 'green' }}>
                                    <div
                                        ref={provided.innerRef}
                                    >
                                        {items.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div>
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}

                                                        >
                                                            <span size='large'
                                                                style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                                                            >{item.content}
                                                            </span>
                                                        </div>
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
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
                            <Droppable droppableId="droppable2" direction='horizontal'>
                                {(provided, snapshot) => (
                                    <div style={{ backgroundColor: snapshot.isDraggingOver && 'green' }}>
                                        <div
                                            ref={provided.innerRef}
                                        >  {lowerItems.length > 0 ? 'Palabras Claves incluidas:' : 'Arrastra aca las palabras claves de la tabla'}
                                            {lowerItems.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div>
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}

                                                            >
                                                                <span size='large'
                                                                    style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                                                                >{item.content}
                                                                </span>
                                                            </div>
                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                        <input
                                            placeholder="Escribe el Titulo SEO"
                                            onChange={e => onChangeState("articleKeywords", e.target.value, "titleInput")}
                                            value={isArticleTitleArray ? JSON.stringify(lowerItems.map(i => i.content)) : articleKeywords}
                                        />
                                        <br />
                                    </div>
                                )}
                            </Droppable>
                            {EditorView}
                        </Card>
                        <Card>
                            <Row>
                                <Button onClick={() => toggleMessage()}> {hidden ? 'Show' : 'Hide'} custom message</Button>
                                <span hidden={hidden}>
                                    {(lowerItems.length > 0)
                                        ? <div> Resultado es: <br /> {lowerItems.map(i => i.words
                                            ? <div> {i.words.replace("<<recipientName>>", recipientName)} <br /> </div>
                                            : <div> {i.content + ','} <br /> </div>)}
                                            <br />
                                            {yourName && <div>- {yourName} </div>}
                                            {html2plaintext && <div>- {html2plaintext} </div>}
                                        </div>
                                        : <div> Nada aqui</div>
                                    }
                                </span>
                                {Analysis}
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

import React, { Component } from 'react'
import { Container, Row, Col, ToggleButton } from 'react-bootstrap';
import {  Droppable, Draggable } from 'react-beautiful-dnd';

export default class SERPTableView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: []
        }
    }


    render() {
        const { tableData } = this.props;
        const { columns, rows } = tableData;
        return (
            <Container>
                <Row>
                    <Col>
                        Seleccion
                    </Col>
                    <Col>
                        {columns[0].title}
                    </Col>
                    <Col>
                        {columns[1].title}
                    </Col>
                    <Col>
                        {columns[2].title}
                    </Col>
                    <Col>
                        {columns[3].title}
                    </Col>
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
            </Container>
        )
    }
}

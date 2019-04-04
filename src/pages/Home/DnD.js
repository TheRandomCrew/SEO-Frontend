import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { RowCenter } from './style/GridStyles';
import { SERPTable } from './section/SERP';
import './style/ripple.css';

const DnD = ({ items, droppableId, children = undefined }) => {
    // https://codesandbox.io/s/ql08j35j3q
    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? 'lightblue' : 'white',
    });
    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',

        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'white',

        // styles we need to apply on draggables
        ...draggableStyle
    });

    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {
                        droppableId === 'keywords' ?
                            items.length > 2 ?
                                '_' :
                                <RowCenter>
                                    <div className="lds-ripple">
                                        <div></div><div></div>
                                    </div>
                                </RowCenter> :
                            items.length > 0 ?
                                'Palabras Claves incluidas:' :
                                'Arrastra aca las palabras claves de la tabla'
                    }
                    {items.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}>
                            {(provided, snapshot) => {
                                switch (droppableId) {
                                    case 'keywords': {
                                        return (
                                            <div>
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}

                                                >
                                                    <SERPTable
                                                        item={item}
                                                        snapshot={snapshot}
                                                    />
                                                    {provided.placeholder}
                                                </div>
                                            </div>
                                        )
                                    }
                                    case 'title': {
                                        return (
                                            <div>
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}

                                                >
                                                    <span size='large' hidden
                                                        style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                                                    >{item.key}
                                                    </span>
                                                    {provided.placeholder}
                                                </div>
                                            </div>
                                        )
                                    }
                                    case 'meta': {
                                        return (
                                            <div>
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}

                                                >
                                                    <span size='large' hidden
                                                        style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                                                    >{item.key}
                                                    </span>
                                                    {provided.placeholder}
                                                </div>
                                            </div>
                                        )
                                    }
                                    case 'editor': {
                                        return (
                                            <div>
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}

                                                >
                                                    <span size='large' hidden
                                                        style={{ color: snapshot.isDragging ? 'green' : (item.words ? 'orange' : 'red') }}
                                                    >{item.key}
                                                    </span>
                                                    {provided.placeholder}
                                                </div>
                                            </div>
                                        )
                                    }
                                    default: {
                                        console.error('This case must not exist')
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                {item.key}
                                            </div>
                                        )
                                    }
                                }
                            }
                            }
                        </Draggable>
                    ))}                    
                    {children}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default DnD;
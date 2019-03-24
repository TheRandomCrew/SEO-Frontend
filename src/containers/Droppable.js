import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import DNDLayoutView from 'presentation/Home/DNDLayoutView';

const DroppableAndDraggable = ({ items, droppableId, children=undefined }) => {
    console.log(items)
    return (
        <Droppable droppableId={droppableId}>
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
                                            <DNDLayoutView
                                                item={item}
                                                snapshot={snapshot}
                                                droppableId={droppableId}
                                            />
                                            {provided.placeholder}
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                    {children}
                </div>
            )}
        </Droppable>
    )
}

export default DroppableAndDraggable

import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import DNDLayoutView from 'presentation/Home/DNDLayoutView';

const DroppableAndDraggable = ({ items, droppableId, children = undefined }) => {
    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
                <div style={{ backgroundColor: snapshot.isDraggingOver && 'green' }}>
                    <div
                        ref={provided.innerRef}
                    >
                        {droppableId === 'keywords' ? null:items.length > 0 ? 'Palabras Claves incluidas:' : 'Arrastra aca las palabras claves de la tabla'}
                        {items.map((item, index) => (
                            <Draggable key={item.key} draggableId={item.key} index={index}>
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
                                            {droppableId === 'keywords' ? null : provided.placeholder}
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {droppableId === 'keywords' ? null : provided.placeholder}
                    </div>
                    {children}
                </div>
            )}
        </Droppable>
    )
}

export default DroppableAndDraggable

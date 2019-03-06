import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import EditorView from '../Editor';
import Analysis from '../Analysis';

//this is just an array of items to start out using
//you don't have to declare it here, you could declare it down in state if you wanted
//I think you have to have content and id in each item
const staticItems = [{ content: "Casa", id: "1" },
{ content: "Casa en la playa", id: "2" },
{ content: "Casa pequena", id: "3" },
{ content: "Casa en alquiler", id: "4" },
{ content: "Casas cerca de mi en venta", id: "5", words: `Casas cerca de tu ubicacion en <<recipientName>> en venta.` },
{ content: "Casas expropiadas", id: "6", words: `Casas expropiadas en <<recipientName>>.` }
]

//'reorder' reorders the list it is given, moving the draggable from the startIndex to the endIndex and returning an array
//it's a function- see the => below
// it takes three parameters- an array and two numbers
//the stuff after : defines the acceptable types of the parameters
const reorder = (
    list: any[],
    startIndex: number,
    endIndex: number): any[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

//move and reorder first moves the draggable from one list to the other
//then reorders the destination list
//and returns two arrays
//this is a function (see the => below!) with many parameters
//the stuff after : defines the acceptable types of the parameters
const moveAndReorder = (
    sourceList: any[],
    sourceStartIndex: number,
    destinationList: any[],
    destinationEndIndex: number): any[] => {
    let sourceResult = Array.from(sourceList);
    //designate the draggable to be removed from sourceResult
    let [removed] = sourceResult.splice(sourceStartIndex, 1);
    //because we used splice, sourceresult no longer contains the element that was moved out of it

    const destinationResult = Array.from(destinationList);
    //add the draggable that we removed from the sourceList into the destinationResult
    destinationResult.splice(destinationEndIndex, 0, removed);

    //return the two arrays
    //sourceResult should be the source droppable but without the draggable that got moved
    //destinationResult should be the destination droppable with the moved draggable added
    //in the correct position
    return [sourceResult, destinationResult]
};


class DND extends Component {
    //we declared staticItems above
    //lower items is just an empty array
    state = {
        items: staticItems,
        lowerItems: [],
        hidden: true,
        yourName: "",
        recipientName: "",
        html2plaintext: "",
        articleKeywords: "",
        isArticleTitleArray: false
    };

    //this function turns the message display on and off
    toggleMessage = () => this.setState((prevState) => ({ hidden: !prevState.hidden }));

    //when Dragging ends, we look at the place the item was dropped -
    //outside a droppable, in the same droppable, or in another droppable
    onDragEnd = (result) => {

        // if it's dropped outside a droppable
        //result does not have a destination
        //we return null
        if (!result.destination) {
            return;
        }

        //if source.droppableId does not equal destination.droppableId,
        //that means the draggable item was dragged from one droppable into another droppable
        //then you need to remove the Draggable from the source.droppableId list
        //and add it into the correct position of the destination.droppableId list.

        //prepare to compare the source to the destination
        const source: DraggableLocation = result.source;
        const destination: DraggableLocation = result.destination;
        let sourceId = source.droppableId;
        let destinationId = destination.droppableId;

        console.log(`moving from ${sourceId} to ${destinationId}`);

        //just a short form of the two item arrays from state
        let items = this.state.items;
        let lowerItems = this.state.lowerItems;

        //If the place we moved the draggable out of is different from the place we moved it to, execute this
        if (sourceId !== destinationId) {
            console.log(`Hey, looks like source droppable (${sourceId}) is different from destination droppable (${destinationId})`)
            //we only have two lists- droppable1 and droppable2
            //so if the source is droppable1, then the destination is droppable2
            if (sourceId === "droppable1") {
                let sourceList = items;
                let destinationList = lowerItems;
                //Note: source.index and destination.index are generated onDragEnd-
                //source.index is the index where the dragged item started out in the source droppable
                //destination.index is the index where the dragged item was placed by the user, in the destination droppable
                //after we pass the parameters to moveAndReorder, we will get back an array of two arrays
                //lists[0] will be the source droppable with the moved draggable taken out
                //lists[1] will be the target droppable with the moved draggable added in at the correct index
                let lists = moveAndReorder(
                    sourceList,
                    source.index,
                    destinationList,
                    destination.index
                );
                //so now we set the state to our two lists
                this.setState({ items: lists[0], lowerItems: lists[1], isArticleTitleArray: true })
            } else if (sourceId === "droppable2") {
                let sourceList = lowerItems;
                let destinationList = items;
                let lists = moveAndReorder(
                    sourceList,
                    source.index,
                    destinationList,
                    destination.index
                );

                this.setState({ lowerItems: lists[0], items: lists[1] })
            }

        } else { //If it was moved within the same list, then just reorder that list
            console.log(`Source is the same as destination`);
            console.log(`reordering ${sourceId}`);
            if (sourceId === "droppable1") {
                items = reorder(
                    this.state.items,
                    source.index,
                    destination.index);

                this.setState({ items: items });
            } else if (sourceId === "droppable2") {
                lowerItems = reorder(
                    this.state.lowerItems,
                    source.index,
                    destination.index);

                this.setState({ lowerItems: lowerItems });
            }
        }
    }

    onChangeState = (key, value, type) => {
        console.log(value)
        if (type === 'toggle') {
            this.setState({ key: !this.state[key] })
        }
        if (type === 'titleInput') {
            this.setState({
                [key]: value,
                isArticleTitleArray: false
            })
        }
        else{
            this.setState({ [key]: value })
        }
    }
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        const { yourName, recipientName, items, lowerItems, hidden, html2plaintext,isArticleTitleArray, articleKeywords } = this.state
        let toggleMessage = this.toggleMessage
        let onChangeState = this.onChangeState
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Container style={{ marginTop: '45px', padding: 20 }}>
                    <Row>
                        <Col lg="4">
                            <Row>
                                <Card>
                                    <h6>Tu nombre</h6>
                                    <input
                                        value={yourName}
                                        onChange={(event) => this.onChangeState("yourName", event.target.value)} />
                                    <br />
                                    <h6>Tu Ubicacion</h6>
                                    <input
                                        value={recipientName}
                                        onChange={(event) => this.onChangeState("recipientName", event.target.value)} />
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
                                                value={isArticleTitleArray?JSON.stringify(lowerItems.map(i => i.content)):articleKeywords}
                                            />
                                            <br />
                                        </div>
                                    )}
                                </Droppable>
                                <EditorView set={onChangeState} />
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
                                    <Analysis />
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                    {/* <br />
                    <h2>Make a custom message using text inputs & drag and drop items!</h2>
                    <br />
                    <div>
                        Give us some information about the message: <br />
                        <h6>Tu nombre</h6>
                        <input
                            value={yourName}
                            onChange={(event) => this.onChangeState("yourName", event.target.value)} />
                        <br />
                        <h6>Su nombre</h6>
                        <input
                            value={recipientName}
                            onChange={(event) => this.onChangeState("recipientName", event.target.value)} />
                        <br />
                    </div>
                    <br />
                    <Droppable droppableId="droppable1">
                        {(provided, snapshot) => (
                            <div style={{ backgroundColor: snapshot.isDraggingOver && 'green' }}>
                                <div
                                    ref={provided.innerRef}
                                > These items can be added to your message below. Drag them around! <br />
                                    Red items are a single word. <br />
                                    Orange items have more content. <br />
                                    {this.state.items.map((item, index) => (
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
                    <br />
                    <Droppable droppableId="droppable2" direction='horizontal'>
                        {(provided, snapshot) => (
                            <div style={{ backgroundColor: snapshot.isDraggingOver && 'green' }}>
                                <div
                                    ref={provided.innerRef}
                                >  {this.state.lowerItems.length > 0 ? 'These items are in your message' : 'Drop items here to write your custom message!'}
                                    {this.state.lowerItems.map((item, index) => (
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
                    </Droppable> */}
                    {/* <br />
                    <br />
                    <Button onClick={() => this.toggleMessage()}> {this.state.hidden ? 'Show' : 'Hide'} custom message</Button>
                    <span hidden={this.state.hidden}>
                        {(this.state.lowerItems.length > 0)
                            ? <div> Message is: <br /> {this.state.lowerItems.map(i => i.words
                                ? <div> {i.words.replace("<<recipientName>>", recipientName)} <br /> </div>
                                : <div> {i.content + ','} <br /> </div>)}
                                <br />
                                {this.state.yourName && <div>- {this.state.yourName} </div>}
                            </div>
                            : <div> I got nothin to say! </div>
                        }
                    </span>
                    <br />
                    <br />
                    <span>Enjoy your message!</span> */}
                </Container>
            </DragDropContext>
        );
    }
}

export default DND;

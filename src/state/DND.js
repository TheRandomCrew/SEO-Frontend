import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { reorder, move, moveAndReorder } from '../utils/DND';
import DNDContext from './DNDContext'

const { Provider } = DNDContext

class DND extends Component {
    state = {
        DnDTableItems: [{ key: '-', volume: 0, cpc: 0, competencia: 0, id: '0' }],
        DnDTitleItems: [],
        DnDMetaItems: [],
        DnDEditorItems: [], // TODO: make multidrop viable in Editor
        DnDTargetID: '' // show what Draggable just received an item
    };

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Provider
                    value={{
                        state: this.state,
                        actions: {
                            addKeyword: this.addKeyword
                        }
                    }}
                >
                    {this.props.children}
                </Provider>
            </DragDropContext>
        );
    }


    componentDidMount() {
        this.setState({ ...this.state, DnDTableItems: this.props.serpData })
    }

    componentDidUpdate(prevProps) {
        const { serpData } = this.props
        if (serpData !== prevProps.serpData) {
            console.log('serpData Changed')
            this.setState({ ...this.state, DnDTableItems: serpData })
        }
    }

    addKeyword = (key, array) => {
        switch (key) {
            case 'title':
                {
                    console.log(this.state.DnDTitleItems.concat(array))
                    this.setState({ DnDTitleItems: this.state.DnDTitleItems.concat(array) })
                    break;
                }
            case 'meta':
                {
                    this.setState({ DnDMetaItems: this.state.DnDMetaItems.concat(array) })
                    break;
                }
            case 'text':
                {
                    this.setState({ DnDEditorItems: this.state.DnDEditorItems.concat(array) })
                    break;
                }

            default:
                console.log('No place for that value here')
                break;
        }
    }

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
        const source = result.source;
        const destination = result.destination;
        let sourceId = source.droppableId;
        let destinationId = destination.droppableId;

        console.log(`moving from ${sourceId} to ${destinationId}`);

        let { DnDTableItems,
            DnDTitleItems,
            DnDMetaItems,
            DnDEditorItems, } = this.state

        //If the place we moved the draggable out of is different from the place we moved it to, execute this
        if (sourceId !== destinationId) {
            switch (sourceId) {
                case 'keywords': {
                    let sourceList = DnDTableItems;
                    let destinationList = [];
                    switch (destinationId) {
                        case 'title': {
                            destinationList = DnDTitleItems;
                            //Note: source.index and destination.index are generated onDragEnd-
                            //source.index is the index where the dragged item started out in the source droppable
                            //destination.index is the index where the dragged item was placed by the user, in the destination droppable
                            //after we pass the parameters to moveAndReorder, we will get back an array of two arrays
                            //lists[0] will be the source droppable with the moved draggable taken out
                            //lists[1] will be the target droppable with the moved draggable added in at the correct index
                            let lists = move(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            // set in state/App.js the new item
                            this.props.setPair()
                            this.setState({
                                DnDTableItems: lists[0],
                                DnDTitleItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        case 'meta': {
                            destinationList = DnDMetaItems;
                            let lists = move(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDTableItems: lists[0],
                                DnDMetaItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        case 'editor': {
                            destinationList = DnDEditorItems;
                            let lists = move(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDTableItems: lists[0],
                                DnDEditorItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        default: {
                            console.log('The new destinationId is not set or the name given is incorrect')
                            break;
                        }
                    }
                    break;
                }
                case 'title': {
                    let sourceList = DnDTitleItems;
                    let destinationList = [];
                    switch (destinationId) {
                        case 'keywords': {
                            destinationList = DnDTableItems;
                            let lists = moveAndReorder(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDTitleItems: lists[0],
                                DnDTableItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        case 'meta': {
                            destinationList = DnDMetaItems;
                            let lists = moveAndReorder(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDTitleItems: lists[0],
                                DnDMetaItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        case 'editor': {
                            destinationList = DnDEditorItems;
                            let lists = moveAndReorder(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDTitleItems: lists[0],
                                DnDEditorItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        default: {
                            console.log('The new destinationId is not set or the name given is incorrect')
                            break;
                        }
                    }
                    break;
                }
                case 'meta': {
                    let sourceList = DnDMetaItems;
                    let destinationList = [];
                    switch (destinationId) {
                        case 'keywords': {
                            destinationList = DnDTableItems;
                            let lists = moveAndReorder(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDMetaItems: lists[0],
                                DnDTableItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        case 'title': {
                            destinationList = DnDTitleItems;
                            let lists = moveAndReorder(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDMetaItems: lists[0],
                                DnDTitleItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        case 'editor': {
                            destinationList = DnDEditorItems;
                            let lists = moveAndReorder(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDMetaItems: lists[0],
                                DnDEditorItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        default: {
                            console.log('The new destinationId is not set or the name given is incorrect')
                            break;
                        }
                    }
                    break;
                }
                case 'editor': {
                    let sourceList = DnDEditorItems;
                    let destinationList = [];
                    switch (destinationId) {
                        case 'title': {
                            destinationList = DnDTitleItems;
                            let lists = moveAndReorder(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDEditorItems: lists[0],
                                DnDTitleItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        case 'meta': {
                            destinationList = DnDMetaItems;
                            let lists = moveAndReorder(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDEditorItems: lists[0],
                                DnDMetaItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        case 'keywords': {
                            destinationList = DnDTableItems;
                            let lists = moveAndReorder(
                                sourceList,
                                source.index,
                                destinationList,
                                destination.index
                            );
                            this.setState({
                                DnDEditorItems: lists[0],
                                DnDTableItems: lists[1],
                                DnDTargetID: destinationId
                            })
                            break;
                        }
                        default: {
                            console.log('The new destinationId is not set or the name given is incorrect')
                            break;
                        }
                    }
                    break;
                }
                default:
                    console.error('The new destinationId is not set or the name given is incorrect')
                    break;
            }
        } else { //If it was moved within the same list, then just reorder that list
            console.log(`Source is the same as destination`);
            console.log(`reordering ${sourceId}`);
            let items = []
            switch (sourceId) {
                case 'keywords': {
                    items = reorder(
                        this.state.DnDTableItems,
                        source.index,
                        destination.index);

                    this.setState({ DnDTableItems: items });
                    break;
                }
                case 'title': {
                    items = reorder(
                        this.state.DnDTitleItems,
                        source.index,
                        destination.index);

                    this.setState({ DnDTitleItems: items });
                    break;
                }
                case 'meta': {
                    items = reorder(
                        this.state.DnDMetaItems,
                        source.index,
                        destination.index);

                    this.setState({ DnDMetaItems: items });
                    break;
                }
                case 'editor': {
                    items = reorder(
                        this.state.DnDEditorItems,
                        source.index,
                        destination.index);

                    this.setState({ DnDEditorItems: items });
                    break;
                }
                default:
                    console.error('This case must not exist')
                    break;
            }
        }
    }
}

export default DND;

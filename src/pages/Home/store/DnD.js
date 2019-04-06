import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { reorder } from '../util/DND';
import DnDContext from './DnDContext';

const { Provider } = DnDContext

export default class DnD extends Component {
    state = {
        DnDTableItems: [{ key: '-', volume: 0, cpc: 0, competencia: 0, id: '0' }],
        DnDTitleItems: [],
        DnDMetaItems: [],
        DnDEditorItems: [],
        DnDTitle:'',
        DnDMeta:'',
        DnDEditor:''
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
            this.setState({ ...this.state, DnDTableItems: serpData })
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

        let { DnDTableItems} = this.state

        if (sourceId !== destinationId) {
            let sourceList = DnDTableItems;
                    switch (destinationId) {
                        case 'title': {                            
                            this.setState({DnDTitle: sourceList[source.index].key })
                            break;
                        }
                        case 'meta': {
                            this.setState({DnDMeta: sourceList[source.index].key })
                            break;
                        }
                        case 'editor': {
                            this.setState({DnDEditor: sourceList[source.index].key })
                            break;
                        }
                        default: {
                            console.log('The new destinationId is not set or the name given is incorrect')
                            break;
                        }
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

import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DNDLayoutView from './DNDLayoutView';
import EditorView from '../Editor';

//this is just an array of items to start out using
//you don't have to declare it here, you could declare it down in state if you wanted
//I think you have to have content and id in each item
const staticItems = [
    { key: '-', volume: 0, cpc: 0, competencia: 0, id: '0', content: '-' },
    // { content: "Casa", id: "1" },
    // { content: "Casa en la playa", id: "2" },
    // { content: "Casa pequena", id: "3" },
    // { content: "Casa en alquiler", id: "4" },
    // { content: "Casas cerca de mi en venta", id: "5", words: `Casas cerca de tu ubicacion en <<recipientName>> en venta.` },
    // { content: "Casas expropiadas", id: "6", words: `Casas expropiadas en <<recipientName>>.` }
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

    componentDidMount(){
        this.setState({...this.state, items: this.props.serpData})
    }

    componentDidUpdate(prevProps){
        const { serpData } = this.props
        if (serpData !== prevProps.serpData){
            console.log(serpData)
            this.setState({...this.state, items: serpData})
        }
    }

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
        else {
            this.setState({ [key]: value })
        }
    }
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        const {
            yourName,
            recipientName,
            items,
            lowerItems,
            hidden,
            html2plaintext,
            isArticleTitleArray,
            articleKeywords } = this.state
        let toggleMessage = this.toggleMessage
        let onChangeState = this.onChangeState
        const { searchForm,
            serpTable,
            rankTable,
            Analysis,
            isSearching,
            toggle,
            expand } = this.props
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <DNDLayoutView
                    yourName={yourName}
                    recipientName={recipientName}
                    items={items}
                    lowerItems={lowerItems}
                    hidden={hidden}
                    html2plaintext={html2plaintext}
                    isArticleTitleArray={isArticleTitleArray}
                    articleKeywords={articleKeywords}
                    toggleMessage={toggleMessage}
                    onChangeState={onChangeState}
                    searchForm={searchForm}
                    serpTable={serpTable}
                    rankTable={rankTable}
                    EditorView={<EditorView set={onChangeState} />}
                    Analysis={Analysis}
                    isSearching={isSearching}
                    toggle={toggle}
                    expand={expand}
                />
            </DragDropContext>
        );
    }
}

export default DND;

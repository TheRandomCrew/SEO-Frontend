//'reorder' reorders the list it is given, moving the draggable from the startIndex to the endIndex and returning an array
//it's a function- see the => below
// it takes three parameters- an array and two numbers
//the stuff after : defines the acceptable types of the parameters
export const reorder = (
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
export  const moveAndReorder = (
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
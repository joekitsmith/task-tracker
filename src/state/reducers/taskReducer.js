import initialState from '../initial-task-list.json'

const removeIdFromArray = (array, id) => {
    id = parseInt(id)
    for(var i=0; i<array.length; i++) {
        if(array[i].id == id) {
            array[i].completed = !(array[i].completed)
        }
    }
    return [...array]
}

const taskReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "add":
            return [...state, {id:state.length+1, text:action.payload, completed:false}]
        case "complete":
            return removeIdFromArray(state, action.payload)
        default:
            return state
    }
}

export default taskReducer
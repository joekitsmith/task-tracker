import initialState from '../initial-task-list.json'

const taskReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "add":
            return [...state, {id:state.length+1, text:action.payload}]
        default:
            return state
    }
}

export default taskReducer
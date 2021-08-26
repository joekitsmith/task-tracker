import initialState from '../initial-task-list.json'

const removeIdFromArray = (array, id) => {
    return array.map(task => {
        if (task.id !== id) return task
        return {
            ...task,
            completed: !task.completed,
        }
    })
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

export { taskReducer, removeIdFromArray }
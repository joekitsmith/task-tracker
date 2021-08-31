import initialState from '../initial-task-list.json'

export const reorderTasks = (taskArray) => {
    // Split by completed/not completed then sort by ID

    const completed = taskArray.filter(task => task.completed)
    const notCompleted = taskArray.filter(task => !task.completed)

    completed.sort((a,b) => a.id - b.id)
    notCompleted.sort((a,b) => a.id - b.id)

    return notCompleted.concat(completed)
}

export const changeTaskCompleted = (array, id) => {
    const id_int = parseInt(id)
    return array.map(task => {
        if (task.id !== id_int) return task
         return {
             ...task,
             completed: !task.completed,
         }
     })
}

const completeTask = (taskArray, id) => {
    const completedTasks = changeTaskCompleted(taskArray, id)
    return reorderTasks(completedTasks)
}

const taskReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "add":
            return [...state, {id:state.length+1, text:action.payload, completed:false}]
        case "complete":
            return completeTask(state, action.payload)
        default:
            return state
    }
}

export default taskReducer
const addTaskToList = (task) => {
    return(dispatch) => {
        dispatch({
            type: 'add',
            payload: task
        })
    }
}

const checkTaskAsCompleted = (id) => {
    return(dispatch) => {
        dispatch({
            type: 'complete',
            payload: id
        })
    }
}

export { addTaskToList, checkTaskAsCompleted }
export const addTaskToList = (task) => {
    return(dispatch) => {
        dispatch({
            type: 'add',
            payload: task
        })
    }
} 
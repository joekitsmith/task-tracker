const initialState = [
    {
      id: 1,
      text: "Finish JIRA boards"
    },
    {
      id: 2,
      text: "Update readme to reflect changes"
    },
    {
      id:3,
      text: "Test ML model on new data"
    },
    {
      id:4,
      text: "Submit holiday request"
    }
  ]

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
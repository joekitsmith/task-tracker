import { useState } from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

function App() {

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

  const [tasks] = useState(initialState)

  return (
    <div>
      <TaskList taskArray={tasks}/>
      <AddTask/>
    </div>
  )
}

export default App
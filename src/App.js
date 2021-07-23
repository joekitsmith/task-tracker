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

  const [tasks, setTasks] = useState(initialState)

  function updateTasks(newTask) {
    const updatedTasks = [...tasks, {id:tasks.length+1, text:newTask}]
    setTasks(updatedTasks)
  }

  return (
    <div>
      <TaskList taskArray={tasks}/>
      <AddTask onAdd={updateTasks}/>
    </div>
  )
}

export default App
import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {

  var initialState = [
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
  ];

  const [tasks] = useState(initialState);

  return (
    <div className="App">
      <TaskList taskArray={tasks}/>
    </div>
  )
};

export default App;
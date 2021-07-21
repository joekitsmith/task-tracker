import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {
  const [tasks] = useState([
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
    ]);

  return (
    <div className="App">
      <TaskList task_array={tasks}/>
    </div>
  );
}

export default App;
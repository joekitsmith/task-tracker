import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"
import CategoryBoard from "./components/CategoryBoard"

function App() {

  const state = useSelector((state) => state.tasks)

  const dispatch = useDispatch()

  const { addTaskToList } = bindActionCreators(actionCreators, dispatch)

  return (
    <div>
      <CategoryBoard categoryTitle="General" taskArray={state} addTask={addTaskToList}/>
    </div>
  )
}

export default App
import { useSelector } from 'react-redux'

import CategoryBoard from "./components/CategoryBoard"

function App() {

  const state = useSelector((state) => state.tasks)

  return (
    <div>
      <CategoryBoard categoryTitle="General" taskArray={state}/>
    </div>
  )
}

export default App
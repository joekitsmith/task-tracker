import React from 'react'
import { render } from "@testing-library/react"
import { Provider } from 'react-redux'
import { store } from '../../state/store'
import "@testing-library/jest-dom/extend-expect"
import TaskList from '../TaskList'
import initialState from '../../state/initial-task-list.json'

// Would like to test that:
// - list renders with correct text in correct order
// - empty task list renders with 'No tasks' string
// How can I manipulate the state then check to see if task list is as expected? Should I even do this?

const renderComponent = () => render(
    <Provider store={store()}>
        <TaskList/>
    </Provider>
)

test("list renders with correct text in correct order", async () => {
    const { getAllByTestId } = renderComponent()
    const taskList = getAllByTestId('task').map(li => li.textContent)
    const initialTasks = initialState.map(t => t.text)
    expect(taskList).toEqual(initialTasks)
})

//test("empty task list renders with 'No tasks' string", async () => {
//    const { getByText } = renderComponent()
//    expect(getByText(/No tasks/i)).toBeInTheDocument()
//})
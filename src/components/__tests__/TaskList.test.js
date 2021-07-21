import React from 'react'
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import TaskList from '../TaskList'

afterEach(cleanup)

test("list renders with correct text", () => {
    const tasks = [{id:1, text: "Do this"}, {id:2, text: "Do that"}]
    const {getAllByTestId} = render(<TaskList task_array={tasks}/>);
    const taskList = getAllByTestId('task').map(li => li.textContent)
    expect(taskList).toEqual(['Do this', 'Do that'])
});

test("list renders with correct text in correct order", () => {
    const tasks = [{id:1, text: "Do this"}, {id:2, text: "Do that"}]
    const {getAllByTestId} = render(<TaskList task_array={tasks}/>);
    const taskList = getAllByTestId('task').map(li => li.textContent)
    const taskString = tasks.map(t => t.text)
    expect(taskList).toEqual(taskString)
});

test("list renders with correct text in correct order", () => {
    const tasks = [{id:1, text: "Do this"}, {id:2, text: "Do that"}]
    const {getAllByTestId} = render(<TaskList task_array={tasks}/>);
    const taskList = getAllByTestId('task').map(li => li.textContent)
    const taskString = tasks.map(t => t.text)
    expect(taskList).toEqual(taskString)
});

test("empty task list renders with 'No tasks' string", () => {
    const tasks = []
    const {getByText} = render(<TaskList task_array={tasks}/>);
    expect(getByText(/No tasks/i))
});
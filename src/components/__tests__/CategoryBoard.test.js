import React from 'react'
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import CategoryBoard from '../CategoryBoard'

test("category board renders", () => {
    const mock = jest.fn()
    const { getByTestId } = render(<CategoryBoard categoryTitle="" taskArray={[]} addTask={mock}/>)
    expect(getByTestId('board')).toBeInTheDocument()
})

test("category header renders", () => {
    const mock = jest.fn()
    const { getByTestId } = render(<CategoryBoard categoryTitle="" taskArray={[]} addTask={mock}/>)
    expect(getByTestId('header')).toBeInTheDocument()
})

test("task body renders", () => {
    const mock = jest.fn()
    const { getByTestId } = render(<CategoryBoard categoryTitle="" taskArray={[]} addTask={mock}/>)
    expect(getByTestId('taskBody')).toBeInTheDocument()
})

test("add body renders", () => {
    const mock = jest.fn()
    const { getByTestId } = render(<CategoryBoard categoryTitle="" taskArray={[]} addTask={mock}/>) 
    expect(getByTestId('addBody')).toBeInTheDocument()
})

test("category title displayed", () => {
    const mock = jest.fn()
    const { getByText } = render(<CategoryBoard categoryTitle="Test Category" taskArray={[]} addTask={mock}/>)
    expect(getByText(/Test Category/i)).toBeInTheDocument()
})

test("task list displayed", () => {
    const mock = jest.fn()
    const tasks = [{id:1, text: "Do this"}, {id:2, text: "Do that"}]
    const { getByText } = render(<CategoryBoard categoryTitle="" taskArray={tasks} addTask={mock}/>)
    expect(getByText(/Do this/i)).toBeInTheDocument()
    expect(getByText(/Do that/i)).toBeInTheDocument()
})

test("add task button displayed", () => {
    const mock = jest.fn()
    const { getByText } = render(<CategoryBoard categoryTitle="" taskArray={[]} addTask={mock}/>)
    expect(getByText(/Add Task/i)).toBeInTheDocument()
})
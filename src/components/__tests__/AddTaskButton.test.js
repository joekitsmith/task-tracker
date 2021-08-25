import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import AddTaskButton from '../AddTaskButton'

test("Button renders in document", async () => {
    const mock = jest.fn()
    render(<AddTaskButton setOpen={mock}/>)
    expect(screen.getByRole('button')).toBeInTheDocument()
})
test("setOpen called 1 time when add button clicked", async () => {
    const mock = jest.fn()
    render(<AddTaskButton setOpen={mock}/>)
    fireEvent.click(screen.getByRole('button'))
    expect(mock).toHaveBeenCalledTimes(1)
})
test("setOpen called with true when add button clicked", async () => {
    const mock = jest.fn()
    render(<AddTaskButton setOpen={mock}/>)
    fireEvent.click(screen.getByRole('button'))
    expect(mock).toHaveBeenCalledWith(true)
})

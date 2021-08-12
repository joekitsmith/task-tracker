import React from 'react'
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import AddTaskButton from '../AddTaskButton'

test("Button renders in document", async () => {
    const mock = jest.fn()
    const { getByRole } = render(<AddTaskButton setOpen={mock}/>)
    expect(getByRole('button')).toBeInTheDocument()
})
test("setOpen called when add button clicked", async () => {
    const mock = jest.fn()
    const { getByRole } = render(<AddTaskButton setOpen={mock}/>)
    fireEvent.click(getByRole('button'))
    expect(mock).toHaveBeenCalled()
})

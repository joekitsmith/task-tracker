import React from 'react'
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import AddTask from '../AddTask'

test("dialog opens when Add Task button clicked", () => {
    const { getByTestId } = render(<AddTask/>)
    fireEvent.click(getByTestId('dialogButton'))
    expect(getByTestId('dialog')).toBeInTheDocument()
})

test("input of new task string updates text field", () => {
    const { getByTestId } = render(<AddTask/>)
    fireEvent.click(getByTestId('dialogButton'))
    const textField = getByTestId('newTask').querySelector('input')
    fireEvent.change(textField, {target: { value: "example task"}})
    expect(textField.value).toBe("example task")
})

test("click Add button with filled text calls onAdd function with text", () => {
    const mock = jest.fn()
    const { getByTestId } = render(<AddTask onAdd={mock}/>)
    fireEvent.click(getByTestId('dialogButton'))
    const textField = getByTestId('newTask').querySelector('input')
    fireEvent.change(textField, {target: { value: "example task"}})
    fireEvent.click(getByTestId('addButton'))
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith("example task")
})
//
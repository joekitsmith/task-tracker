import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from 'react-redux'
import { store } from '../../state/store'
import "@testing-library/jest-dom/extend-expect"
import AddTaskDialog from '../AddTaskDialog'

const renderComponent = (setOpen) => render(
    <Provider store={store()}>
        <AddTaskDialog open={true} setOpen={setOpen}/>
    </Provider>
)

test("Dialog renders if open is true", async () => {
    renderComponent()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
})

test("setOpen called 1 time when text field filled and Add button clicked", async () => {
    const mock = jest.fn()
    render(<Provider store={store()}>
                <AddTaskDialog open={true} setOpen={mock}/>
            </Provider>
        )
    const addButton = screen.getByRole('button')
    const textField = screen.getByRole('textbox')
    fireEvent.change(textField, {target: { value: "example task"}})
    fireEvent.click(addButton)
    expect(mock).toHaveBeenCalledTimes(1)
})

test("setOpen called with false when text field filled and Add button clicked", async () => {
    const mock = jest.fn()
    render(<Provider store={store()}>
                <AddTaskDialog open={true} setOpen={mock}/>
            </Provider>
        )
    const addButton = screen.getByRole('button')
    const textField = screen.getByRole('textbox')
    fireEvent.change(textField, {target: { value: "example task"}})
    fireEvent.click(addButton)
    expect(mock).toHaveBeenCalledWith(false)
})

test("button enabled when text field filled with non-space characters", async () => {
    renderComponent()
    const textField = screen.getByRole('textbox')
    fireEvent.change(textField, {target: { value: "example task"}})
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
})

test("button disabled when text field not filled", async () => {
    renderComponent()
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
})

test("button disabled when text field filled with only spaces", async () => {
    renderComponent()
    const textField = screen.getByRole('textbox')
    fireEvent.change(textField, {target: { value: "   "}})
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
})
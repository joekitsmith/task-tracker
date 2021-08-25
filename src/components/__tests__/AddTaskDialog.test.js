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
test("setOpen called 1 time when Add button clicked", async () => {
    const mock = jest.fn()
    render(<Provider store={store()}>
                <AddTaskDialog open={true} setOpen={mock}/>
            </Provider>
        )
    const addButton = screen.getByRole('button')
    fireEvent.click(addButton)
    expect(mock).toHaveBeenCalledTimes(1)
})
test("setOpen called with false when Add button clicked", async () => {
    const mock = jest.fn()
    render(<Provider store={store()}>
                <AddTaskDialog open={true} setOpen={mock}/>
            </Provider>
        )
    const addButton = screen.getByRole('button')
    fireEvent.click(addButton)
    expect(mock).toHaveBeenCalledWith(false)
})
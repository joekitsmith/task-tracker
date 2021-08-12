import React from 'react'
import { fireEvent, render } from "@testing-library/react"
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
    const mock = jest.fn()
    const { getByRole } = renderComponent(mock)
    expect(getByRole('dialog')).toBeInTheDocument()
})
test("setOpen called when Add button clicked", async () => {
    const mock = jest.fn()
    const { getByRole } = render(<Provider store={store()}>
                                    <AddTaskDialog open={true} setOpen={mock}/>
                                </Provider>
                                )
    const addButton = getByRole('button')
    fireEvent.click(addButton)
    expect(mock).toHaveBeenCalled()
})
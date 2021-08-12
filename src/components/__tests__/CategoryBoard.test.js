import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { store } from '../../state/store'
import CategoryBoard from '../CategoryBoard'

const renderComponent = () => render(
    <Provider store={store()}>
        <CategoryBoard categoryTitle="General"/>
    </Provider>
)

test("category board renders", () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId('board')).toBeInTheDocument()
})

test("category title displayed", () => {
    const { getByText } = renderComponent()
    expect(getByText(/General/i)).toBeInTheDocument()
})

test("task list displayed", () => {
    const { getByText } = renderComponent()
    expect(getByText(/Finish JIRA boards/i)).toBeInTheDocument()
})

test("add task button rendered", () => {
    const { getByText } = renderComponent()
    expect(getByText(/ADD TASK/i)).toBeInTheDocument()
})
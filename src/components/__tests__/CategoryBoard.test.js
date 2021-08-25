import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import { store } from '../../state/store'
import CategoryBoard from '../CategoryBoard'

const renderComponent = () => render(
    <Provider store={store()}>
        <CategoryBoard categoryTitle="General"/>
    </Provider>
)

test("category board renders", () => {
    renderComponent()
    expect(screen.getByTestId('board')).toBeInTheDocument()
})

test("category title displayed", () => {
    renderComponent()
    expect(screen.getByText(/General/i)).toBeInTheDocument()
})

test("task list displayed", () => {
    renderComponent()
    expect(screen.getByText(/Finish JIRA boards/i)).toBeInTheDocument()
})

test("add task button rendered", () => {
    renderComponent()
    expect(screen.getByText(/ADD TASK/i).closest('button')).toBeInTheDocument()
})
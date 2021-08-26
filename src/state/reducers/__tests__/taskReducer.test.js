import { removeIdFromArray } from '../taskReducer'
import "@testing-library/jest-dom/extend-expect"

test("completing task with id 1 changes false to true for first task", async () => {
    const inputArray = [{"id":1, "text":'Do this', "completed":false},
                        {"id":2, "text":'Do that', "completed": false}]
    const expectedArray = [{"id":1, "text":'Do this', "completed":true},
                           {"id":2, "text":'Do that', "completed": false}]
    const outputArray = removeIdFromArray(inputArray, 1)
    expect(outputArray).toEqual(expectedArray)
})

test("uncompleting task with id 1 changes true to false for first task", async () => {
    const inputArray = [{"id":1, "text":'Do this', "completed":true},
                        {"id":2, "text":'Do that', "completed": false}]
    const expectedArray = [{"id":1, "text":'Do this', "completed":false},
                           {"id":2, "text":'Do that', "completed": false}]
    const outputArray = removeIdFromArray(inputArray, 1)
    expect(outputArray).toEqual(expectedArray)
})

test("completing task with id 2 changes false to true for second task", async () => {
    const inputArray = [{"id":1, "text":'Do this', "completed":false},
                        {"id":2, "text":'Do that', "completed": false}]
    const expectedArray = [{"id":1, "text":'Do this', "completed":false},
                           {"id":2, "text":'Do that', "completed": true}]
    const outputArray = removeIdFromArray(inputArray, 2)
    expect(outputArray).toEqual(expectedArray)
})

test("completing task with empty array returns empty array", async () => {
    const inputArray = []
    const expectedArray = []
    const outputArray = removeIdFromArray(inputArray, 1)
    expect(outputArray).toEqual(expectedArray)
})
import { reorderTasks, changeTaskCompleted } from '../taskReducer'
import "@testing-library/jest-dom/extend-expect"

describe("testing changeTaskCompleted", () => {

    test("completing task with id 1 changes false to true for first task", async () => {
        const inputArray = [{"id":1, "text":'Do this', "completed":false},
                            {"id":2, "text":'Do that', "completed": false}]
        const expectedArray = [{"id":1, "text":'Do this', "completed":true},
                            {"id":2, "text":'Do that', "completed": false}]
        const outputArray = changeTaskCompleted(inputArray, 1)
        expect(outputArray).toEqual(expectedArray)
    })

    test("uncompleting task with id 1 changes true to false for first task", async () => {
        const inputArray = [{"id":1, "text":'Do this', "completed":true},
                            {"id":2, "text":'Do that', "completed": false}]
        const expectedArray = [{"id":1, "text":'Do this', "completed":false},
                            {"id":2, "text":'Do that', "completed": false}]
        const outputArray = changeTaskCompleted(inputArray, 1)
        expect(outputArray).toEqual(expectedArray)
    })

    test("completing task with id 2 changes false to true for second task", async () => {
        const inputArray = [{"id":1, "text":'Do this', "completed":false},
                            {"id":2, "text":'Do that', "completed": false}]
        const expectedArray = [{"id":1, "text":'Do this', "completed":false},
                            {"id":2, "text":'Do that', "completed": true}]
        const outputArray = changeTaskCompleted(inputArray, 2)
        expect(outputArray).toEqual(expectedArray)
    })

    test("completing task with empty array returns empty array", async () => {
        const inputArray = []
        const expectedArray = []
        const outputArray = changeTaskCompleted(inputArray, 1)
        expect(outputArray).toEqual(expectedArray)
    })
})

describe("testing reorderTasks", () => {

    test("complete task before incomplete task moves complete task to end", async () => {
        const inputArray = [{"id":1, "text":'Do this', "completed":true},
                            {"id":2, "text":'Do that', "completed": false}]
        const expectedArray = [{"id":2, "text":'Do that', "completed":false},
                            {"id":1, "text":'Do this', "completed": true}]
        const outputArray = reorderTasks(inputArray, 1)
        expect(outputArray).toEqual(expectedArray)
    })

    test("incomplete task before complete task does not change order", async () => {
        const inputArray = [{"id":1, "text":'Do this', "completed":false},
                            {"id":2, "text":'Do that', "completed": true}]
        const expectedArray = [{"id":1, "text":'Do this', "completed":false},
                            {"id":2, "text":'Do that', "completed": true}]
        const outputArray = reorderTasks(inputArray, 1)
        expect(outputArray).toEqual(expectedArray)
    })

    test("all incomplete tasks does not change order", async () => {
        const inputArray = [{"id":1, "text":'Do this', "completed":false},
                            {"id":2, "text":'Do that', "completed": false}]
        const expectedArray = [{"id":1, "text":'Do this', "completed":false},
                            {"id":2, "text":'Do that', "completed": false}]
        const outputArray = reorderTasks(inputArray, 2)
        expect(outputArray).toEqual(expectedArray)
    })

    test("all complete tasks does not change order", async () => {
        const inputArray = [{"id":1, "text":'Do this', "completed":true},
                            {"id":2, "text":'Do that', "completed": true}]
        const expectedArray = [{"id":1, "text":'Do this', "completed":true},
                            {"id":2, "text":'Do that', "completed": true}]
        const outputArray = reorderTasks(inputArray, 2)
        expect(outputArray).toEqual(expectedArray)
    })

    test("first and third tasks complete moves second task to top and retains completed order", async () => {
        const inputArray = [{"id":1, "text":'Do this', "completed":true},
                            {"id":2, "text":'Do that', "completed": false},
                            {"id":3, "text":'Do it', "completed": true}]
        const expectedArray = [{"id":2, "text":'Do that', "completed":false},
                               {"id":1, "text":'Do this', "completed": true},
                               {"id":3, "text":'Do it', "completed": true}]
        const outputArray = reorderTasks(inputArray, 2)
        expect(outputArray).toEqual(expectedArray)
    })


    test("reordering empty array returns empty array", async () => {
        const inputArray = []
        const expectedArray = []
        const outputArray = changeTaskCompleted(inputArray, 1)
        expect(outputArray).toEqual(expectedArray)
    })
})
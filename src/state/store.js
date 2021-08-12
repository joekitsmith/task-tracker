import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers/index"
import thunk from "redux-thunk" 

export const store = state => createStore(
    reducers,
    state,
    applyMiddleware(thunk)
)
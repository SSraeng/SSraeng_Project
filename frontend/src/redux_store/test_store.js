import axios from "axios";
import {configureStore,createSlice} from "@reduxjs/toolkit"


const Test = createSlice({
    name: "TestReducer",
    initialState: [],
    reducers: {
        user: (state, action) => {
            state.push({ name: action.payload.name, times: action.payload.times, start: (new Date().getTime() / 1000), submit: [] })
        },
        submit: (state, action) => {
            state[0].end = new Date().getTime() / 1000
        },
        add: (state, action) => {
            state[0].submit.push(action.payload)
        },
        reset: (state, action) => {
            return []
        }
    }
})


const test_store = configureStore({ reducer: Test.reducer })

export const {
    user, submit, add, reset
} = Test.actions;


export default test_store;

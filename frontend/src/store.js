import axios from "axios";
import {configureStore,createSlice} from "@reduxjs/toolkit"

const Test = createSlice({
    name: "TestReducer",
    initialState: { name:"", submit: [] },
    reducers: {
        name: (state, action) => {
            return {name:action.payload.name,submit:state.submit}
        },
        submit: (state,action) => {
            state.submit.push(action.payload)
        },
    }
})

const store = configureStore({ reducer: Test.reducer })

export const {
    name, submit
} = Test.actions;


export default store;

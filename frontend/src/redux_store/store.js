import axios from "axios";
import {configureStore,createSlice} from "@reduxjs/toolkit"


export const PlasticCal = createSlice({
    name: "PlasticCalReducer",
    initialState: [0],
    reducers: {
        plastic_add: (state, action) => {
            state[0] += action.payload
        },
        plastic_minus: (state, action) => {
            state[0] -= action.payload
        },
        plastic_reset: (state, action) => {
            return [0]
        }
    }
})

export const Test = createSlice({
    name: "TestReducer",
    initialState: [],
    reducers: {
        user: (state, action) => {
            state.push({ user_name: action.payload.name, delivery_count: action.payload.times, answers: [] ,start_time:new Date().getTime()})
        },
        submit: (state, action) => {
            state[0].end_time = new Date().getTime()
        },
        add: (state, action) => {
            state[0].answers[action.payload.index]=action.payload.submit
        },
        reset: (state, action) => {
            return []
        }
    }
})



const store = configureStore({ reducer: { plastic:PlasticCal.reducer, test:Test.reducer }})

export const {
    plastic_add, plastic_minus, plastic_reset
} = PlasticCal.actions;
export const {
     user,submit,add ,reset
} = Test.actions;


export default store;

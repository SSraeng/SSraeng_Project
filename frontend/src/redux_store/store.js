import axios from "axios";
import {configureStore,createSlice} from "@reduxjs/toolkit"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage/session";

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

export const TestPage = createSlice({
    name:"TestPage",
    initialState : [0],
    reducers:{
        page_plus:(state,action)=>{
            state[0] += 1
        },
        page_minus:(state,action)=>{
            state[0] -= 1
        },
        page_reset: (state, action) => {
            return [0]
        }
    }
})


const store = configureStore({ reducer: { plastic:PlasticCal.reducer, test:Test.reducer, test_page:TestPage.reducer }})

export const {
    plastic_add, plastic_minus, plastic_reset
} = PlasticCal.actions;
export const {
     user,submit,add ,reset
} = Test.actions;
export const{
    page_minus,page_plus,page_reset
} = TestPage.actions;

export default store;

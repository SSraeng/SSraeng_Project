import {configureStore,createSlice} from "@reduxjs/toolkit"
import {persistReducer} from "redux-persist"
import sessionStorage from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import thunk from "redux-thunk";



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

export const CO2Cal= createSlice({
    name: "CO2CalReducer",
    initialState: [0],
    reducers: {
        co2_e:(state,action)=>{
            state[0] += action.payload
        },
        reset_co2:(state,action)=>{
            return [0]
        }
    }
})

export const Test = createSlice({
    name: "TestReducer",
    initialState: [],
    reducers: {
        user: (state, action) => {
            state.push({ user_name: action.payload.name, delivery_count: action.payload.times, answers: [] })
        },
        start:(state,action)=> {
            state[0].start_time=new Date().getTime()
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

export const Result = createSlice({
    name: "Result",
    initialState : [],
    reducers:{
        set_result:(state,action)=>{
            state.push(
                action.payload)
            },
        reset_result:(state,action)=>{
            return []
        }
        }
    }
)

export const StopWatchStart = createSlice({
    name:"StopWatchStart",
    initialState : [false],
    reducers:{
        stopwatch_start : (state,action)=>{
            return [true]
        },
        stopwatch_reset:(state,action)=>{
            return [false]
        }
    }
}
)

export const UserId = createSlice({
    name:"UserId",
    initialState : [],
    reducers:{
        add_user_id:(state,action)=>{
            return [action.payload]
        },
        reset_user_id:()=>{
            return []
        }
    }
})

export const Checked = createSlice({
    name: "Checked",
    initialState:[ [0,0,0,0,0,0,0,0,0,0] ],
    reducers:{
        add_checked:(state,action)=>{
            return [action.payload]
        },
        reset_checked:()=>{
            return [[0,0,0,0,0,0,0,0,0,0]]
        }
    }
})


const reducers = combineReducers({
    plastic:PlasticCal.reducer, 
    test:Test.reducer, 
    test_page:TestPage.reducer,
    result:Result.reducer,
    stopwatch:StopWatchStart.reducer,
    user_id:UserId.reducer,
    co2 : CO2Cal.reducer,
    checked:Checked.reducer
})

const persistConfig = {
    key:'user',
    storage:sessionStorage,
};

const persistedReducer =persistReducer(persistConfig,reducers);


const store = configureStore({ 
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})




export const {
    plastic_add, plastic_minus, plastic_reset
} = PlasticCal.actions;
export const {
     user,start,submit,add ,reset,
} = Test.actions;
export const{
    page_minus,page_plus,page_reset
} = TestPage.actions;

export const{
    set_result, reset_result
} = Result.actions;
export const{
    stopwatch_start, stopwatch_reset
} = StopWatchStart.actions

export const{
    add_user_id,reset_user_id
} = UserId.actions

export const {
    co2_e,reset_co2
} = CO2Cal.actions

export const{
    add_checked, reset_checked
}= Checked.actions

export default store;

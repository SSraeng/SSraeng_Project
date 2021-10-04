import axios from "axios";
import {configureStore,createSlice} from "@reduxjs/toolkit"


const PlasticCal = createSlice({
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

const plastic_store = configureStore({ reducer: PlasticCal.reducer })

export const {
    plastic_add, plastic_minus, plastic_reset
} = PlasticCal.actions;


export default plastic_store;

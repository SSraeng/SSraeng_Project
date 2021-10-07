import React,{useEffect, useState} from 'react';
// import test from "../tests/test.json"
import store, { add } from '../redux_store/store';
import axios from 'axios';


function Tests({num}) {
    const [test,setTest] = useState([])
    async ()=>{
        const res = await axios.get("/api/test/test");
        await console.log(res.data)
        await setTest(res.data)
        return res.data
    }
    
//  const questions = test? Object.values(test[Object.keys(test)[num]])[0]:null
//  const answers = test?Object.values(test[Object.keys(test)[num]])[1]:null
    return (
        <div>
            {test[num].question}
            <p></p>
            {test[num].example.map((answer, index)=>
                <div key={index} onClick={() => { store.dispatch(add(index + 1)); 
                console.log(store.getState().test[0].submit)}}>{`${index+1}.`}{answer}</div>)}
        </div>
    );
}

export default Tests;

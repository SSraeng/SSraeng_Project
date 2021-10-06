import React,{useState} from 'react';
import test from "../tests/test.json"
import store, { add } from '../redux_store/store';
import { Hover } from '../styled_components/hover';

function Tests({num}) {
    const [active,setActive] = useState(false)
    const questions = Object.values(test[Object.keys(test)[num-1]])[0]
    const answers = Object.values(test[Object.keys(test)[num-1]])[1]
    return (
        
        <div>
            <Hover>
            {questions}
            <p></p>
            {answers.map((answer, index)=>
                <div key={index} onClick={() => { store.dispatch(add({index:num-1,submit:index+1}));console.log(store.getState().test[0].submit);}}>{`${index+1}.`}{answer}</div>)}
            </Hover>        
        </div>
        
    );
}

export default Tests;

import React from 'react';
import test from "../tests/test.json"
import store from '../store';
function Tests({num}) {

    const questions = Object.values(test[Object.keys(test)[num]])[0]
    const answers = Object.values(test[Object.keys(test)[num]])[1]
    return (
        <div>
            {questions}
            <p></p>
            {answers.map((answer, index)=>
                <div onClick={()=>{store.dispatch()}}>{`${index+1}.`}{answer}</div>)}
        </div>
    );
}

export default Tests;

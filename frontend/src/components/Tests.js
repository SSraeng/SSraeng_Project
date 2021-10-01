import React from 'react';
import test from "../tests/test.json"
import store, { add } from '../store';

function Tests({num}) {

    const questions = Object.values(test[Object.keys(test)[num]])[0]
    const answers = Object.values(test[Object.keys(test)[num]])[1]
    return (
        <div>
            {questions}
            <p></p>
            {answers.map((answer, index)=>
                <div key={index} onClick={() => { store.dispatch(add(index + 1)); console.log(store.getState()[0].submit)}}>{`${index+1}.`}{answer}</div>)}
        </div>
    );
}

export default Tests;

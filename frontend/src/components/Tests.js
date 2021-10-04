import React from 'react';
import test from "../tests/test.json"
import test_store, { add } from '../redux_store/test_store';

function Tests({num}) {

    const questions = Object.values(test[Object.keys(test)[num]])[0]
    const answers = Object.values(test[Object.keys(test)[num]])[1]
    return (
        <div>
            {questions}
            <p></p>
            {answers.map((answer, index)=>
                <div key={index} onClick={() => { test_store.dispatch(add(index + 1)); console.log(test_store.getState()[0].submit)}}>{`${index+1}.`}{answer}</div>)}
        </div>
    );
}

export default Tests;

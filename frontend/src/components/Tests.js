import React, { useState, useEffect } from 'react';
import test from "../tests/test.json"
import store, { add } from '../redux_store/store';
import { Hover } from '../styled_components/hover';

function Tests({ num }) {
    const questions = Object.values(test[Object.keys(test)[num - 1]])[0]
    const answers = Object.values(test[Object.keys(test)[num - 1]])[1]
    const [clickedNum, setClickedNum] = useState(Array(10).fill(0))

    return (

        <div>
            <Hover>
                {questions}
                <p></p>
                {answers.map((answer, i) =>
        
                    <div key={i} style={{ backgroundColor: clickedNum[num-1] == i+1 ? 'blue' : 'red' }}
                        onClick={(e) => {
                            store.dispatch(add({ index: num - 1, submit: i + 1 }));
                            setClickedNum(clickedNum.map((element, index) => {return index+1 == num ? element = i+1 : element}));

                        }}>{`${i + 1}.`}{answer}</div>)}
            </Hover>
        </div>

    );
}

export default Tests;

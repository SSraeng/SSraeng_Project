import React,{useState, useEffect} from 'react';
import test from "../tests/test.json"
import store, { add } from '../redux_store/store';
import { Hover } from '../styled_components/hover';
import { element } from 'prop-types';

function Tests({num}) {
    const [active,setActive] = useState(false)
    const questions = Object.values(test[Object.keys(test)[num-1]])[0]
    const answers = Object.values(test[Object.keys(test)[num-1]])[1]
    const[isClicked,setIsClicked] = useState(Array(4).fill(false))
    useEffect(()=>{
        setIsClicked(Array(4).fill(false))
    },[num])
    return (
        
        <div>
            <Hover>
            {questions}
            <p></p>
            {answers.map((answer, i)=>
                <div key={i} style={{backgroundColor: isClicked[i] ? 'blue' : 'red'}} 
                onClick={(e) => { 
                    store.dispatch(add({index:num-1,submit:i+1}));
                    setIsClicked(isClicked.map((element,index)=>{return index==i? element=true:element=false}));
                }}>{`${i+1}.`}{answer}</div>)}
            </Hover>        
        </div>
        
    );
}

export default Tests;

import React, { useEffect, useState, useRef } from 'react';
import store from '../redux_store/store';

function useInterval(callback,delay){
    const savedCallback = useRef();
    useEffect(()=>{
        savedCallback.current = callback;
    },[callback])

    useEffect(()=>{
        let id = setInterval(()=>{
            savedCallback.current();
        },delay)
        return ()=> clearInterval(id);
    },[delay]);
}


function StopWatch({num}) {

    const[counter, setCounter] = useState(0);
        useInterval(() => {
            setCounter(counter + 1);
        }, 10);
    
    const minute = parseInt(counter/6000)
    const second = parseInt(counter % 6000 / 100)
    const millysecond = parseInt(counter%100)
    return (
        <div style={{textAlign : "center", marginTop:"5vh"}}>
            <h3>경과시간</h3>
            <h4>
            {minute < 10? `0${minute}`:`${minute}`}:
            {second < 10? `0${second}`:`${second}`}:
            {millysecond<10? `0${millysecond}`:`${millysecond}`}</h4>
        </div>
    );
}

export default StopWatch;

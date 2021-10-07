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
        <div>
            <div>경과시간</div>
            {minute< 10? `0${minute}`:`${minute}`}:
            {second < 10? `0${second}`:`${second}`}:
            {millysecond<10? `0${millysecond}`:`${millysecond}`}
        </div>
    );
}

export default StopWatch;

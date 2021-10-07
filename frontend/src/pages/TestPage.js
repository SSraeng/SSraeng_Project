import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import store, { submit, reset, plastic_reset } from '../redux_store/store';
import Tests from '../components/Tests'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProgressBar from '../components/ProgressBar';
import { useHistory } from 'react-router';
import StopWatch from '../components/StopWatch';
function TestPage() {
    const [num, setNum] = useState(1)
    const useSubmit = useSelector(state => state.test[0].answers)
    const history = useHistory()
    const buttonStyle= {  width:"20vh", height:"5vh", backgroundColor : "#fff", borderRadius:"1vh" }

    
    return (
        <div >
            
            <NavBar />
            <StopWatch num={num}/>
            <ProgressBar num={num} />

            <Tests num={num} />
            <div style={{margin:"auto", textAlign:"center", marginTop:"3vh"}}> 
            {num != 1 ? <button style={buttonStyle} onClick={() => { setNum(num - 1);}}>이전</button> : null}
            {num == 10 ?
                <button 
                style={buttonStyle} 
                onClick={
                    () => {
                        
                        store.dispatch(submit());
                        history.replace("/result")
                    }
                }>
                    결과보기
                </button>
                : <button 
                style={buttonStyle} 
                onClick={() => { setNum(num + 1);}} disabled={
                    useSubmit.length >= num ? false : true
                }>다음</button>}
                </div>
        </div>
    )
}

export default TestPage;


import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import store, { submit, reset, plastic_reset } from '../redux_store/store';
import Tests from '../components/Tests'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProgressBar from '../components/ProgressBar';
import { useHistory } from 'react-router';
function TestPage() {
    const [num, setNum] = useState(1)
    const useSubmit = useSelector(state => state.test[0].answers)
    const history = useHistory()
    return (
        <div >
            <NavBar />
            <ProgressBar num={num} />

            <Tests num={num} />
            {num != 1 ? <button onClick={() => { setNum(num - 1); console.log(useSubmit); }}>이전</button> : null}
            {num == 10 ?
                <button onClick={
                    () => {
                        
                        store.dispatch(submit());
                        console.log(store.getState().test[0])
                        history.replace("/result")
                    }
                }>
                    결과보기
                </button>
                : <button onClick={() => { setNum(num + 1);}} disabled={
                    useSubmit.length >= num ? false : true
                }>다음</button>}
        </div>
    )
}

export default TestPage;


import React, {useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import store, { submit, page_plus, page_minus, add_user_id } from '../redux_store/store';
import Tests from '../components/Tests'
import { useSelector } from 'react-redux';
import ProgressBar from '../components/ProgressBar';
import { useHistory } from 'react-router';
import StopWatch from '../components/StopWatch';
import { Hover } from '../styled_components/style';

function TestPage() {
    const num = useSelector(state=>state.test_page[0])
    const useSubmit = useSelector(state => state.test[0].answers)
    const history = useHistory()
    const buttonStyle= {  width:"20vh", height:"5vh", backgroundColor : "#fff", borderRadius:"1vh" }
    const [resultButton,setResultButton] = useState(false)

    const getResult = async () =>{
        setResultButton(true)
        store.dispatch(submit());
        const userId = await axios.post("/api/analysis",store.getState().test[0]);
        store.dispatch(add_user_id(userId.data))
        history.push({pathname:"/loading", state:{next:`/result/${userId.data}`}})

    }

    return (
        <div >
            
            <NavBar />
            <StopWatch />
            <ProgressBar num={num} />

            <Tests num={num} history={history} />
            <div style={{margin:"auto", textAlign:"center", marginTop:"3vh", display:'flex',justifyContent:"center" }}> 
            {num !== 0 ? <Hover><button style={{marginRight:"10vh",...buttonStyle}} onClick={() => { store.dispatch(page_minus());}}>이전</button></Hover> : null}
            {num === 9 ?
                <Hover>
                <button 
                style={buttonStyle} 
                onClick={getResult} disabled={resultButton||useSubmit.length !== 10}>
                    결과보기
                </button></Hover>
                : <Hover><button 
                style={buttonStyle} 
                onClick={() => { store.dispatch(page_plus());}} disabled={
                    useSubmit.length >= num+1 ? false : true
                }>다음</button></Hover>}
                </div>
        </div>
    )
}

export default TestPage;


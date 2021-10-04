import React,{useState} from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import test_store, { submit, reset } from '../redux_store/test_store';
import {plastic_reset} from '../redux_store/plastic_store'
import Tests from '../components/Tests'
import { Link } from 'react-router-dom';


function TestPage() {
    const [num, setNum] = useState(0)
    return (
        <div >
            <NavBar/>
            {/* {
                
                axios({
                    method: "post",
                    url: "http://127.0.0.1:5000/api/test/test",
                    data: store.getState()[0]
                })
                .then((res)=>{console.log(res)})
                .catch((e)=>alert(e))
            } */}
            <Tests num={num} />
            {num != 0?<button onClick={()=>setNum(num-1)}>이전</button>:null}
            {num == 9 ? <Link to="/result"><button onClick={() => {
                test_store.dispatch(submit(test_store.getState()[0]));
            }}>결과보기</button></Link> : <button onClick={() => setNum(num + 1)}>다음</button>}
        </div>
    )
}

export default TestPage;


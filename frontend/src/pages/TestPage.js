import React,{useState} from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import store, { submit, reset , plastic_reset} from '../redux_store/store';
import Tests from '../components/Tests'
import { Link } from 'react-router-dom';


function TestPage() {
    const [num, setNum] = useState(0)
    return (
        <div >
            <NavBar/>
            <Tests num={num} />
            {num != 0?<button onClick={()=>setNum(num-1)}>이전</button>:null}
            {num == 9 ? <Link to="/result"><button onClick={() => {
                store.dispatch(submit(store.getState()[0]));
            }}>결과보기</button></Link> : <button onClick={() => setNum(num + 1)}>다음</button>}
        </div>
    )
}

export default TestPage;


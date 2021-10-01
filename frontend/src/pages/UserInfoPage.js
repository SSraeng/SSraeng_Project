import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../components/NavBar';
import axios from 'axios';
import test_store, { submit, user,reset } from '../redux_store/test_store';
import plastic_store, {plastic_reset} from '../redux_store/plastic_store'


function UserInfoPage() {   
    const history = useHistory()
    const [nickname, setNickname] = useState("")
    const [times, setTimes] = useState("");
    return (
        <div >
            <div>참여자수</div>
            {
                // axios({
                //     method: "get",
                //     url: '/api/test/userinfo',
                //     responseType:'json'

                // })
                // .then((res) => console.log(res))
            }
            <label>이름</label>
            <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <p></p>
            <label>일주일 간 배달 건수</label>
            <input value={times} type="number" onChange={(e) => setTimes(parseInt(e.target.value))} />
            <button onClick={() => setTimes(parseInt(times + 1))}>+</button>
            <button onClick={times > 1 ? () => setTimes(times - 1) : null}>-</button>
            <p></p>
            <button onClick={
                () => {
                    test_store.dispatch(reset())
                    plastic_store.dispatch(plastic_reset())
                    test_store.dispatch(user({ name: nickname, times: times, }));
                    console.log(test_store.getState())
                    history.push("/test/test");
            }
            }>테스트 시작</button>
            
        </div>
    )
}

export default UserInfoPage;

import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../components/NavBar';
import axios from 'axios';
import store, { submit, user,reset, plastic_reset} from '../redux_store/store';


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
                    store.dispatch(reset())
                    store.dispatch(plastic_reset())
                    store.dispatch(user({ name: nickname, times: times, }));
                    history.push("/test/test");
            }
            }>테스트 시작</button>
            
        </div>
    )
}

export default UserInfoPage;

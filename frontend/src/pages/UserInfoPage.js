import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../components/NavBar';
import axios from 'axios';
import store, { submit, user,reset, reset_result,plastic_reset, page_reset, stopwatch_reset, reset_user_id, reset_checked} from '../redux_store/store';
import { Hover } from '../styled_components/style';


function UserInfoPage() {   
    
    const history = useHistory()
    const [nickname, setNickname] = useState("")
    const [times, setTimes] = useState(0);

        return (
        <div>
            <NavBar/>
        <div style={{marginLeft:"auto",textAlign:"center"}}>
            <h1 style={{marginTop:"7vh", marginBottom:"5vh"}}>
                쓰랭 테스트
            </h1>
            <h2 style={{marginBottom:"1vh"}}>이름</h2>
            <input value={nickname} style={{textAlign:"center", marginBottom:"3vh" }}onChange={(e) => setNickname(e.target.value)} />
            <h2 style={{marginBottom:"1vh"}}>일주일 간 배달 건수</h2>
            <button style={{borderRadius:"1vh",marginRight:"1vh",border : "0",marginBottom:"6vh", width:"4vh", backgroundColor:"#2aa6dc"}} 
            onClick={times > 0 ? () => setTimes(times - 1) : null}>-</button>

            <input value={times} style={{textAlign:"center"}} onChange={(e) => setTimes(parseInt(e.target.value))} readOnly/>

            <button style={{borderRadius:"1vh",marginLeft:"1vh",border : "0",marginBottom:"6vh", width:"4vh", backgroundColor:"#2aa6dc"}} onClick={() => setTimes(parseInt(times + 1))}>+</button>
            <p></p>
            <Hover>
            <button style={{textAlign:"center", 
                    width:"28vh", height:"7vh", backgroundColor : "#2aa6dc", 
                    border : "0", borderRadius:"1vh" }}
            onClick={
                () => {
                    store.dispatch(reset())
                    store.dispatch(page_reset())
                    store.dispatch(stopwatch_reset())
                    store.dispatch(reset_user_id())
                    store.dispatch(user({ name: nickname, times: times }));
                    store.dispatch(reset_checked())
                    store.dispatch(reset_result())
                    store.dispatch(plastic_reset())
                    history.push("/test/test")
            }
            } disabled={!nickname}><h1>시작</h1></button>
            </Hover>
            </div>

            
        </div>

    )
}

export default UserInfoPage;

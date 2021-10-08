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
        <div>
            <NavBar/>
        <div style={{marginLeft:"auto",textAlign:"center"}}>
            <h1 style={{marginTop:"7vh", marginBottom:"5vh"}}>
                쓰랭 테스트
            </h1>
            <h2 style={{marginBottom:"1vh"}}>이름</h2>
            <input value={nickname} style={{textAlign:"center", marginBottom:"3vh" }}onChange={(e) => setNickname(e.target.value)} />
            <h2 style={{marginBottom:"1vh"}}>일주일 간 배달 건수</h2>
            <button style={{borderRadius:"1vh",marginRight:"1vh",border : "0",marginBottom:"6vh", width:"4vh", backgroundColor:"#2ac1bc"}} onClick={times > 0 ? () => setTimes(times - 1) : null}>-</button>
            <input value={times}  style={{textAlign:"center"}} onChange={(e) => setTimes(parseInt(e.target.value))} readOnly/>
            <button style={{borderRadius:"1vh",marginLeft:"1vh",border : "0",marginBottom:"6vh", width:"4vh", backgroundColor:"#2ac1bc"}} onClick={() => setTimes(parseInt(times + 1))}>+</button>
            <p></p>
            <button style={{textAlign:"center", 
                    width:"28vh", height:"7vh", backgroundColor : "#2ac1bc", 
                    border : "0", borderRadius:"1vh" }}
            onClick={
                () => {
                    store.dispatch(reset())
                    store.dispatch(plastic_reset())
                    store.dispatch(user({ name: nickname, times: times, }));
                    history.push("/test/test");
            }
            } disabled={!(times&&nickname)}><h1>테스트 시작</h1></button>
            </div>

            
        </div>

    )
}

export default UserInfoPage;

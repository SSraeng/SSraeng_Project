import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../components/NavBar';
import axios from 'axios';
import store, { submit, user,reset, reset_result,plastic_reset, page_reset, stopwatch_reset, reset_user_id, reset_checked} from '../redux_store/store';
import { Hover } from '../styled_components/style';
import Trashes from "../components/Trashes"
function ResetAll(history, nickname, times){
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
            <input value={nickname} style={{border: "1px solid #A5BDCC", borderRadius:"10px",textAlign:"center", width:"20rem", height:"2rem", backgroundColor:`${nickname.length > 10 || nickname.length == 0?" #E5ECF1":"white"}`
            }} 
                onChange={(e) => setNickname(e.target.value)} />
            {nickname.length > 10 || nickname.length == 0?<div style={{color:"#A5BDCC", height:"5vh"}}>이름을 1자이상 10자이하로 입력하세요</div>:<div style={{height:"5vh"}}></div>}
            <h2 style={{ marginBottom:"1vh"}}>일주일 간 배달 건수</h2>
            <button style={{borderRadius:"1vh",marginRight:"1vh",border : "0",marginBottom:"6vh", width:"4vh", backgroundColor:"#A5BDCC"}} 
            onClick={times > 0 ? () => setTimes(times - 1) : null}>-</button>

            <input value={times} style={{borderRadius:"10px", border: "1px solid #A5BDCC",  textAlign:"center", width:"15rem", height:"2rem" }} 
            onChange={(e) => setTimes(parseInt(e.target.value))} readOnly/>

            <button style={{borderRadius:"1vh",marginLeft:"1vh",border : "0",marginBottom:"6vh", width:"4vh", backgroundColor:"#A5BDCC"}} onClick={() => setTimes(parseInt(times + 1))}>+</button>
            <p></p>
            <Hover>
            <button style={{textAlign:"center", 
                    width:"28vh", height:"7vh", backgroundColor : "#6EB3D0", 
                    border : "0", borderRadius:"10px" , marginBottom:"3vh"}}
            onClick={
                () => {ResetAll(history,nickname,times)}
            } disabled={nickname.length > 10 || nickname.length==0}><h1>테스트 시작</h1></button>
            </Hover>
            <Trashes times={times}/>
        
            </div>

            
        </div>

    )
}

export default UserInfoPage;

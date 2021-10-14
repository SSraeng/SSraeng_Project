import React, {useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../components/NavBar';
import store, {user,reset, reset_result,plastic_reset, page_reset, stopwatch_reset, reset_user_id, reset_checked} from '../redux_store/store';
import { Hover, Button } from '../styled_components/style';
import Trashes from "../components/Trashes"
import {grayblue,jawsbar,autumnsky,navy} from "../etc/colors"

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
            <h1 style={{marginTop:"7vh", marginBottom:"5vh", fontSize:"7vh"}}>
                쓰랭 테스트
            </h1>

            <h2 style={{marginBottom:"1vh", fontSize:"4vh", wordSpacing:".5em"}}>이 름</h2>
            <input value={nickname} style={{border: "2px solid #A5BDCC", borderRadius:"10px",textAlign:"center", width:"20rem", height:"5vh", backgroundColor:`${nickname.length > 10 || nickname.length == 0?" #E5ECF1":"white"}`, fontSize:"2vh", fontWeight:"bold"
            }} 
                onChange={(e) => setNickname(e.target.value)} />
            {nickname.length > 10 || nickname.length == 0?<div style={{color:jawsbar, height:"5vh"}}>이름을 1자이상 10자이하로 입력하세요</div>:<div style={{height:"5vh"}}></div>}
            <h2 style={{ marginBottom:"1vh" , fontSize:"4vh"}}>일주일 간 배달 건수</h2>
            <Button onClick={times > 0 ? () => setTimes(times - 1) : null}>-</Button>

            <input value={times} style={{borderRadius:"10px", border: "2px solid #A5BDCC",  textAlign:"center", width:"15rem", height:"5vh", fontSize:"2vh",fontWeight:"bold" }} 
            onChange={(e) => setTimes(parseInt(e.target.value))} readOnly/>

            <Button onClick={() => setTimes(parseInt(times + 1))}>+</Button>
            <p></p>
            <Hover>
            <button style={{
                
                    textAlign:"center", 
                    width:"28vh", height:"8vh", backgroundColor : autumnsky, 
                    border : "0", borderRadius:"10px" , fontSize:"2vh"}}
            onClick={
                () => {ResetAll(history,nickname,times)}
            } disabled={nickname.length > 10 || nickname.length===0}><h1>테스트 시작</h1></button>
            </Hover>
            <Trashes times={times}/>
        
            </div>

            
        </div>

    )
}

export default UserInfoPage;

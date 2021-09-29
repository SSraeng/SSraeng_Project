import React, { useEffect,useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../components/NavBar';
import store from '../store';
import { name, submit } from "../store";

function UserInfoPage() {   
    const history = useHistory()
    const [nickname,setNickname] = useState("")
    return (
        <div >
            <NavBar />
            <input value={nickname} onChange={(e)=>setNickname(e.target.value)}/>
            <button onClick={
                () => {
                    store.dispatch(name({ name: nickname }));
                    history.push("/test/test");
            }
            }>테스트 시작</button>
            
        </div>
    )
}

export default UserInfoPage;

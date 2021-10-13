import React from 'react';
import { useHistory } from 'react-router';
import store from '../redux_store/store';
function NavBar() {
    const history = useHistory()
    const user_id = store.getState().user_id[0]
    
    return (
        <div>
            <header className="Basic-Bar">
                <div >
                    <div style={{ paddingLeft: "50px", fontSize: "30px" , height:"10vh",paddingTop:"5vh"}} onClick={() => history.push("/")}>쓰랭</div></div>
                <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                    <div onClick={() => window.location.replace("/test/userinfo")}>테스트하기</div>
                    <div onClick={() => history.push(user_id?`/ranking/${user_id}`:"/ranking")}>랭킹보기</div>
                    <div onClick={() => history.push("/about")}>About</div>
                </div>
            </header>
            <hr style={{
                border : "solid 1px",
                width: "95vw",
                color: "rgb(80, 78, 78)"}} />
        </div>
    );
}

export default NavBar;

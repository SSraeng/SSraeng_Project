import React from 'react';
import { useHistory } from 'react-router';

function NavBar() {
    const history = useHistory()
    
    return (
        <div>
            <header className="Basic-Bar">
                <div >
                    <div style={{ paddingLeft: "50px", fontSize: "30px" , height:"10vh",paddingTop:"5vh"}} onClick={() => history.push("/")}>쓰랭</div></div>
                <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                    <div onClick={() => history.push("/test")}>테스트하기</div>
                    <div onClick={() => history.push("/ranking")}>랭킹보기</div>
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

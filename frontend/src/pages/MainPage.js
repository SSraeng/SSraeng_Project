import React from 'react';
import NavBar from '../components/NavBar';
import { useHistory } from 'react-router';

function MainPage() {
    const history = useHistory();
    return (
        <div >
            <NavBar />
            <div>메인페이지입니다</div>
            <button onClick={()=>history.push("/test/userinfo")}>테스트하기</button>
        </div>
    )
}

export default MainPage;

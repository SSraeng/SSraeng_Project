import React from 'react';
import { useHistory } from 'react-router';
import store from '../redux_store/store';
import {NavbarWrapper, NavbarTitle, NavbarGomFace, NavbarMenuItem, NavbarMenuWrapper} from '../styled_components/NavbarStyle';

function NavBar() {
    const history = useHistory()
    const user_id = store.getState().user_id[0]
    
    return (
        <NavbarWrapper>
            <header className="Basic-Bar">
                
                <NavbarTitle onClick={() => history.push("/")}>
                    <p>여러분의 <span>쓰</span>레기 <span>랭</span>킹을 매겨드립니다</p>
                    
                <NavbarGomFace src='https://ssraeng.blob.core.windows.net/etc/sunglassgom.jpeg' onClick={() => history.push("/")}/>
                </NavbarTitle>
                
                <NavbarMenuWrapper >
                    <NavbarMenuItem onClick={() => history.push("/test/userinfo")}>테스트하기</NavbarMenuItem>
                    <NavbarMenuItem onClick={() => history.push(user_id?`/ranking/${user_id}`:"/ranking")}>랭킹보기</NavbarMenuItem>
                    <NavbarMenuItem onClick={() => history.push("/about")}>About</NavbarMenuItem>
                </NavbarMenuWrapper>
            </header>
        </NavbarWrapper>
    );
}

export default NavBar;

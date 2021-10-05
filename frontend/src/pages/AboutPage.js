import React from 'react';
import NavBar from '../components/NavBar';
import { memberList } from '../etc/memberList';
import { Introduce } from '../components/Introduce';

function AboutPage() {
    return (
        <>
            <NavBar />
            <div class='about'>
                <div class='about_people'>
                    <p class='about_people_title'>만든이들</p>
                    <p class='about_people_subtitle'>환경문제 서비스 쓰랭을 만든 사람들입니다.</p>
                </div>
                <div class='about_people_list'>
                    {memberList.map(info=> <Introduce id={info.id}
                                                  name={info.name}
                                                  email= {info.email}
                                                  content= {info.content}
                                                  position= {info.position} 
                                                  ssRank ={info.ssRank}/>)}
                </div>
            </div>
        </>
    )
}

export default AboutPage;

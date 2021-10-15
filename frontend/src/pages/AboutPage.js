import React from 'react';
import NavBar from '../components/NavBar';
import { memberList } from '../etc/memberList';
import { Introduce } from '../components/Introduce';
import styled from 'styled-components';

const AboutTitle = styled.p`
    margin-top: 10vh;
    font-size: 3.5rem;
    font-weight: 1000;
    text-shadow: 1px 1px 3px grey;
    @media only screen and (max-width:768px){
        font-size: 1.5rem;
    }
    @media only screen and (min-width:768px) and (max-width:1300px){
        font-size: 2.5rem;
    }
`
const AboutSubtitle = styled.p`
    font-size: 2rem;
    font-weight: 600;
    @media only screen and (max-width:768px){
        font-size: 0.8rem;
    }
`
const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;  
    width: 100%;
    margin-bottom: 10vh;
    padding: 0 auto;
`

function AboutPage() {
    return (
        <>
            <NavBar />
            <div class='about'>
                <div class='about_people'>
                    <AboutTitle>만든이들</AboutTitle>
                    <AboutSubtitle>환경문제 서비스 
                        <span style={{color:"#6EB3D0"}}> 쓰랭</span>
                        을 만든 사람들입니다.</AboutSubtitle>
                </div>
                <ListWrapper>
                    {memberList.map(info=> <Introduce id={info.id}
                                                  name={info.name}
                                                  email= {info.email}
                                                  content= {info.content}
                                                  position= {info.position} 
                                                  ssRank ={info.ssRank}/>)}
                </ListWrapper>
            </div>
        </>
    )
}

export default AboutPage;

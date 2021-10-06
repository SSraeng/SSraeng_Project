import React from 'react';
import NavBar from '../components/NavBar';

function Intro(props){
    return(
      <div className="about_people_box" id={props.id}>
        <div className='about_people_box_image'>
            {/* 이미지 태그로 바뀌는 부분입니다. */}
            <p className='iabout_people_box_image_item'
                alt={props.id}
                style={{height:'100px'}}>
                이미지 파일
            </p>
        </div>
        <div className='about_people_box_content'>
            <p className='about_people_box_content_header'>
                <span className='about_people_box_content_header_name'>{props.name}</span>
                <span className='about_people_box_content_header_position'>개발자</span>
            </p>
            <p className='about_people_box_content_email'>abc123@gmail.com</p>
            <p className='about_people_box_content_description'>엘리서 AI 트랙 2기 레이서 입니다. 만나서 반가워요! </p>
        </div>
      </div>
    )
}

function AboutPage() {
    return (
        <>
            <NavBar />
            <div class='about'>
                <div calss='about_people'>
                    <h1 class='about_people_title'>만든이들</h1>
                    <div class='about_people_subtitle'>환경문제 서비스 쓰랭을 만든 사람들입니다.(설명부분)</div>
                </div>
                <div class='about_people_list'
                     style={{ display: "flex", flexWrap: 'wrap', width: '1200px', margin:'auto', justifyContent: "space-around"}}>
                    <Intro id='1' name='김태호'/>
                    <Intro id='2' name='남궁은선'/>
                    <Intro id='3' name='문지윤'/>
                    <Intro id='4' name='백승욱'/>
                    <Intro id='5' name='서명현'/>
                    <Intro id='6' name='정희재'/>
                </div>
            </div>
        </>
    )
}

export default AboutPage;

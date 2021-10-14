import React from "react";
import styled from "styled-components";
import { Accrodain } from "./Accrodain";

const Refer = styled.div`
    margin: 10vh auto;
    width: 70vw;
    text-align: left;
    border: 2px solid  #E5ECF1;
    background-color:  #E5ECF1;
    padding: 2vh 1vw;
    box-sizing: border-box;
    p {
        text-align: left;
        font-size: 1rem;
        font-weight: 500;
        font-family: Elice_Regular;
    }
    div + div{
        margin-top: 1vh;
    }
    @media only screen and (max-width:768px){
        margin: 10vh auto;
        width: 90vw;
        p { font-size: 0.2rem;}
    }
`
const Title = styled.div`
    margin-bottom: 2vh;
    padding-left: 0.5vh;
    font-family: Elice_Regular;
    font-size: 1.4rem;
    font-weight: 700;

    @media only screen and (max-width:768px){
        font-size: 1rem;
    }
`


export function Reference(){
    return(
    <Refer>
        <Title> 참조 </Title>
        <Accrodain title="기사" contents={article}/>
        <Accrodain title="논문" contents={thesis}/>
        <Accrodain title="사이트" contents={site}/>
    </Refer>
    )
}


const article = (
    <p>
        한겨레, "일회용 배달용기, 탄소배출 35배 더 하고 있다", 2021년 10월 1일 접속<br/>
        환경일보, "지구를 덮은 플라스틱 ‘배달 어택", 2021년 10월 1일 접속<br/>
        머니S뉴스, "집 밖 안나가고 배달"… 쌓이는 일회용품 어쩌나", 2021년 10월 5일 접속<br/>
        경안일보, "코로나 이후 배달음식 소비 33.4%↑…음식물 쓰레기도 증가", 2021년 10월 5일 접속<br/>
        녹색연합, "배달쓰레기 매일 830만개,배달할수록 쓰레기가 쌓이는 사회! 시민들은 강력한 대책을 촉구한다.", 2021년 10월 5일 접속<br/>
        환경부, "제5차 전국폐기물 통계조사…1인 하루 배출량 929.9g", 2021년 10월 5일 접속<br/>
        연합뉴스, "1인당 섭취 미세플라스틱, 매주 신용카드 1장 분량", 2021년 10월 5일 접속<br/>
        뉴스플레닛, "넷플릭스와 배달 음식으로 보낸 주말.. 환경오염은 얼마나?", 2021년 10월 5일 접속<br/>
        뉴스플레닛, "넷플릭스와 배달 음식으로 보낸 주말.. 환경오염은 얼마나?", 2021년 10월 5일 접속<br/>
        동아사이언스, "넷이산화탄소 배출 줄었지만 여전한 지구온난화", 2021년 10월 6일 접속<br/>
        한국전력공사, "탄소 배출 계산기", 2021년 10월 6일 접속<br/>
        인더스트릿 뉴스, "온실가스 줄이지 않으면, 지구 온도 산업화 이전보다 1.5℃ 상승하고 극한 폭염 8.6배 폭증한다.", 2021년 10월 6일 접속<br/>
        한국일보, "끝나지 않는 '폭탄돌리기'의 역사... 쓰레기 매립지 갈등", 2021년 10월 6일 접속<br/>
        환경부, "수거부터 재활용까지, 궁금했던 생활폐기물 처리과정", 2021년 10월 6일 접속<br/>
        녹색신문, "배달음식 용기, 즉석밥 용기, 컵라면 그릇, 마스크 다 재활용 안 된다", 2021년 10월 6일 접속<br/>
        한겨레21, "배달용기 그냥 버리나요? 씻어주세요", 2021년 10월 6일 접속<br/>
        Guradian, "Global heating: the vital statistics from a warming world", 2021년 10월 6일 접속<br/>
        Climate Feedback, "The global polar bear population is threatened by loss of sea ice, contrary to PragerU’s video claim", 2021년 10월 6일 접속<br/>
        National Snow $ Ice center, "Sea Ice Data and Analysis Tools", 2021년 10월 6일 접속<br/>
        시사저널, "인구 20만 '쓰레기 섬' GPGP", 2021년 10월 6일 접속<br/>
    </p>
)

const thesis = (
    <p>
        '미세플라스틱 현황과 인체에 미치는 영향', 류지헌, 조충연, 공업화학 전망, 제22권 제2호, 2019, 
    </p>
)
const site = (
    <p>
        나는 얼마나 많은 발자국을 지구에 남겼을까?,2021년 10월 6일 접속 <br/>
        녹색연합, 배달1회용품 이제 그만, 2021년 10월 2일 접속 <br/>
        카카오링크 API 문서,2021년 10월 9일 접속 <br/>
    </p>
)
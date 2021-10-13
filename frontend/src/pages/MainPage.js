import React from "react";
import NavBar from '../components/NavBar';
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const AccumulateBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
const Main = styled.div`
    display: flex;
    flex-direction:column;
    text-align:center;
`
const MainHeader = styled.div`
    position: relative;
    height:50vh;
    padding-bottom: 30vh;
    margin-bottom: 30vh;
`
const Letter = styled.div`
    border:1px solid black;
    width: 30vw;
    height:100%;
    margin:0 auto;
`
const LetterContent = styled.div`
    font-family:Seulvely;
    font-size:2rem;
    width:100%;
    height:70%;
    padding-top:40px;
`
const Writer= styled.div`
    font-family:Seulvely;
    font-size:2rem;
    width:100%;
    height:30%;
`
const SadBear = styled.img`
    height: 30vh;
    position:absolute;
    bottom:0;
    right: 20vw;
`
const MainBody = styled.div`
    font-size: 1.5em;
    font-weight:700;
    box-shadow: 0 -4vh 8vh rgb(100 100 100 / 50%);
`
const Narration = styled.div`
    height: 100vh;
    width: 100vw;
    margin-top: 15vh;
    p {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    p + p {
        margin-top: 17vh;
    }
    h2 {
        margin-top: 10vh;
    }
`
const Analysis = styled.div`
    height: 190vh;
    width: 100vw;
    box-sizing: border-box;
    position: relative;
`
const ContentsHeader = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    div + div {
        margin-left: auto;
    }
`
const Title = styled.div`
    font-size: 2em;
    font-weight:700;
    text-align: left;
`
const SubTitle = styled.div`
    font-size: 1.1em;
    font-weight:700;
`
const Article = styled.div`
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    background-color: #A6BECC;
`

function MainPage() {
    return (
        <div className='mainpage'>
            <NavBar />
            <AccumulateBox>
                <h2>쓰랭 누적 사용자 수</h2>
                <p>12,345,678명</p>
            </AccumulateBox>
            <Main>
                <MainHeader>
                    <Letter>
                            <LetterContent>
                                코로나19...배달 많아... <br/>
                                플라스틱... 탄소... <br/>
                                지구.. 뜨거워.. <br/>
                                북극곰.. 아파...
                            </LetterContent>
                            <Writer>from. 북극곰</Writer>
                    </Letter>
                    <SadBear src="images/sad_bear.png" alt="슬픈 얼굴의 북극곰" />
                </MainHeader>
                <MainBody>
                    <Narration>
                        <Fade bottom>   
                            <p>
                                북극에 있는 북극곰에게 날아온 편지입니다.<br/>
                                북극곰은 왜 우리에게 이런 편지를 썼을까요?
                            </p>
                        </Fade>
                        <Fade bottom> 
                            <p>
                                코로나19가 장기화 되면서 비대면으로 음식을 받을 수 있는<br/>
                                배달 서비스 이용이 증가했습니다<br/>
                                이에 따라 생활폐기물 배출량이 증가했다는<br/>
                                많은 기사들이 쏟아져 나오고 있습니다
                            </p>
                        </Fade>
                        <Fade bottom> 
                            <p>
                                과연 배달 건수는 얼마나 증가했는지<br/>
                                배출되는 재활용 쓰레기 양은 얼마나 늘었는지<br/>
                                저희와 함께 확인해 보시죠
                            </p>
                        </Fade>
                    </Narration>
                    <Analysis>
                        <ContentsHeader>
                            <Title>
                                거리두기 단계가 올라갈수록<br/>
                                늘어나는 배달 주문
                            </Title>
                            <SubTitle>
                                서브 타이틀 기사가 들어가는<br/>
                                자리입니다.
                            </SubTitle>
                        </ContentsHeader>
                        <div className="main_body_analysis_contents">
                            차트 또는 차트 설명
                        </div>
                        <img src="images/그래프.png" alt="코로나19 확진자수 배달 건수 증가량" style={{width:"100%", position:"absolute", bottom:"0",left:"0"}}/>
                    </Analysis>
                    <Article>
                        <ContentsHeader>
                            <Title>
                                배달 늘어나니<br/>
                                폭증하는<br/>
                                플라스틱 폐기물 배출
                            </Title>
                            <SubTitle>
                                서브 타이틀 기사가 들어가는<br/>
                                자리입니다.
                            </SubTitle> 
                        </ContentsHeader>
                        <div className="main_body_article_contents">
                            차트 또는 차트 설명
                        </div>
                    </Article>
                    <Narration>
                        <Fade bottom>
                            <p>
                                쓰랭의 데이터 분석 결과<br/>
                                코로나 확진자가 증가함에 따라 배달 건수가 증가하고 있고,<br/>
                                이에 따라 재활용 폐기물 배출량이 증가하고 있었습니다
                            </p>
                            <p>
                                많은 쓰레기가 나오고 있는 상황이지만<br/>
                                재활용률은 오히려 떨어졌다고 합니다
                            </p>
                        </Fade>
                        <Fade bottom>    
                            <p>
                                과연 우리는 분리수거를 제대로 하고 있을까요?<br/>
                                배달을 시킬 때마다 얼마나 많은 쓰레기가 나올까요?
                            </p>
                        </Fade>
                        <p>
                            자신의 분리수거 능력은 얼마나 되는지<br/>
                            내 분리수거 점수는 몇점일지<br/>
                        </p>
                        <h2>테스트 해보세요!</h2>
                    </Narration>
                </MainBody>
                <div className="main_footer" style={{ height:"100vh"}}>
                    <button onClick={() => window.location.replace("/test/userinfo")}>테스트하기</button>
                </div>
            </Main>
        </div>
    )
}

export default MainPage;

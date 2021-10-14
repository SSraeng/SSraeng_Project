import { useState, useEffect, React } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { GraphBox } from "../components/GraphBox";
import { Reference } from "../components/Reference";

const AccumulateBox = styled.div`
    width: 10vw;
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    font-weight: 900;
    margin-left: auto;
    margin-right: 5vw;
    margin-top: 5vh;
    color: #6EB3D0;
    text-align: center;
    text-shadow: 1px 2px 2px black;

    @media only screen and (max-width:768px){
        width: 100vw;
        height: 15vh;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
    };

    @media only screen and (min-width:768px) and (max-width:1600px){
        width: 20vw;
        font-size: 2rem;
    }

`
const Main = styled.div`
    display: flex;
    flex-direction:column;
    text-align:center;
`
const MainHeader = styled.div`
    position: relative;
    height:100vh;
    box-sizing: border-box;
    padding-bottom: 30vh;

    @media only screen and (max-width:768px){
        width: 100vw;
    };

`
const Letter = styled.div`
    width: 30vw;
    height:100%;
    margin:0 auto;
    box-shadow: 1vh 2vh 4vh rgb(100 100 100 / 30%);

    @media only screen and (max-width:768px){
        width: 80vw;
    };

    @media only screen and (min-width:768px) and (max-width:1600px){
        width: 40vw;
    }
`
const LetterContent = styled.div`
    font-family:Seulvely;
    font-size: 2.2rem;
    width:100%;
    height:70%;
    padding-top:10vh;
    box-sizing: border-box;

    @media only screen and (max-width:768px){
        font-size: 1.5rem;
    };

`
const Writer= styled.div`
    font-family:Seulvely;
    font-size:2rem;
    width:100%;
    height:30%;
    padding-top: 5vh;
    box-sizing: border-box;

    @media only screen and (max-width:768px){
        font-size: 1.5rem;
    };
`
const SadBear = styled.img`
    width: 20vw;
    position:absolute;
    bottom:10vh;
    right: 10vw;

    @media only screen and (max-width:768px){
        height: 30vh;
        width: auto;
        right: 0;
    };

`
const MainBody = styled.div`
    font-size: 1.5em;
    font-weight:700;
    box-shadow: 0 -4vh 8vh rgb(100 100 100 / 30%);
`
const Narration = styled.div`
    width: 100%;
    height: ${props => props.first ? "60vh" : "160vh"};
    padding-top: ${props => props.first ? "40vh" : "45vh"};
    font-size: ${props => props.first ? "1.8rem" : "1.5rem"};
    p {
        width: 80%;
        margin: 0 auto;
    }
    p + p {
        margin-top: 15vh;
    }
    h2 {
        margin-top: 10vh;
    }

    @media only screen and (max-width:768px){
        font-size: 0.8rem;
        padding-top: 20vh;
        height: ${props => props.first ? "50vh" : "140vh"};
    };


`
const Analysis = styled.div`
    height: 69vw;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    @media only screen and (max-width:768px){
        height: 50vh;
    };
`
const ContentsHeader = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    padding-top: ${props => props.article ? "": "10vh"}; ;
    flex-direction: ${props => props.article ? "": "column"};
    justify-content: ${props => props.article ? "space-between": "" };
    div + div {
        margin-top: ${props => props.article ? "": "7vh" };
    }
    @media only screen and (max-width:768px){
        width: 90%;
        padding-top: 0px;
        flex-direction: column;
    };
`
const Title = styled.div`
    font-size: 2.3em;
    font-weight: 900;
    text-align: left;
    text-shadow: 3px 2px 5px white;
    line-height: 110%;

    @media only screen and (max-width:768px){
        font-size: 1.2rem;
        text-align: center;
    };
`
const SubTitle = styled.div`
    font-size: 0.9em;
    font-weight: 600;
    text-align: left;
    @media only screen and (max-width:768px){
        visibility: hidden;
        height: 0px;
    };
`
const Article = styled.div`
    height: 190vh;
    width: 100%;
    box-sizing: border-box;
    padding-top: 10vh;
    background-color: #A6BECC;
    position: relative;
    @media only screen and (max-width:768px){
        height: 90vh;
    };
`
const GraphBoxWrap = styled.div`
    width: 60vw;
    height:15vh;
    margin-left: 20vh;
    margin-top: 15vh;
    @media only screen and (max-width:768px){
        width: 90vw;
        margin: 10vh auto 0;
        height: 60vh;
        >p {
            margin-top: 2vh;
            font-size: 1rem;
        }
    };
`
const SpeechBubble = styled.div`
    width: 30%;
    height: 50%;
    position: relative;
    font-family: Seulvely;
    font-weight: 700;
    font-size: 1.5rem;
	background: #ffffff;
	border: 5px solid #000000;
    box-shadow: 1vh 1vh 3vh rgb(100 100 100 / 30%);
    border-radius: 50%;
    box-sizing: border-box;
    padding-top: 5%;
    text-align: center;
    margin: 0 auto;
    ::after{
        top: 100%;
        left: 50%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(255, 255, 255, 0);
        border-top-color: #ffffff;
        border-width: 10px;
        margin-left: -10px;
    };
    ::before{
        top: 100%;
        left: 50%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(0, 0, 0, 0);
        border-top-color: #000000;
        border-width: 17px;
        margin-left: -17px;
    };

    @media only screen and (max-width:768px){
        width: 60%;
        height: 15vh;
        font-size: 0.3rem;
        padding-top: 4vh;
    }
    
`
const GukgomQuestion =styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    margin-top: 15vh;
`
const MainFooter = styled.div`
    height: 80vh;
    background-color: white;
    @media only screen and (max-width:768px){
        height: 60vh;
    }
    
`
const TestButton = styled.button`
    height: 10vh;
    width: 15vw;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #6EB3D0;
    border: 0;
    box-shadow: 1vh 1vh 3vh rgb(100 100 100 / 30%);
    color: white;
    cursor: pointer;
    @media only screen and (max-width:768px){
        margin-top: 5vh;
        width: 60vw;
        height: 10vh;
    }
    
`

function MainPage() {
    const [userCnt, setUserCnt] = useState(0)
    // useEffect(()=>{
    //     const fetchEvents = async () =>{
    //         const res = await axios.get("/api")
    //         setUserCnt(res.data.user_cnt)
    //     }
    //     fetchEvents();
    // },[])

    return (
        <div className='mainpage'>
            <NavBar />
            <AccumulateBox>
                    <div>참여자 수</div>
                    <div>{userCnt}명</div>
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
                            <Writer>from. 극곰이</Writer>
                    </Letter>
                    <SadBear src="images/sad_bear.png" alt="슬픈 얼굴의 북극곰" />
                </MainHeader>
                <MainBody>
                    <Narration first>
                        <Fade bottom>   
                            <p>
                                북극에 있는 극곰이에게 날아온 편지입니다.<br/>
                                극곰이는 우리에게 왜 이런 편지를 썼을까요?
                            </p>
                        </Fade>
                    </Narration>
                    <Analysis>
                        <ContentsHeader>
                            <Title>
                                COVID-19 이후<br/>
                                급증하는 배달 주문 건수
                            </Title>
                            <Fade bottom>
                                <SubTitle>
                                    코로나19가 장기화 되면서 비대면으로 음식을 
                                    받을 수 있는 배달 서비스 이용이 증가했습니다.<br/>
                                    20년 총 배달 주문 건수는 19년에 견줘 약 78% 증가하였으며,<br/>
                                    사회적 거리두기가 지속 유지되어 주문 건수 또한 급증하는 추세입니다.<br/>
                                </SubTitle>
                            </Fade>
                        </ContentsHeader>
                        <img src="images/그래프.png" 
                             alt="코로나19 확진자수 배달 건수 증가량"
                             style={{width:"100%", position:"absolute", bottom:"0",left:"0"}}/>
                    </Analysis>
                    <Article>
                        <ContentsHeader article>
                            <Title>
                                늘어나는 배달 서비스와<br/>
                                급증하는 재활용 폐기물<br/>
                            </Title>
                                <Fade bottom>
                                    <SubTitle>
                                        19년 대비 20년의 재활용 폐기물은 평균 18.8% 증가하였습니다.<br/>
                                        배달 서비스 하루 주문량은 270만건에 이르고,<br/>
                                        이로 인해 발생되는 플라스틱 배달 쓰레기 발생량은 약830만개입니다.<br/>
                                        배달 서비스 이용 시 최소 3개의 배달 쓰레기가 발생하는 것 입니다.<br/>
                                    </SubTitle> 
                                </Fade>
                        </ContentsHeader>
                        <Fade bottom>
                            <GraphBoxWrap>
                                <GraphBox matter="종이류" value19="687.3" value20="889" />
                                <GraphBox matter="비닐류" value19="855.5" value20="950.5" />
                                <GraphBox matter="플라스틱" value19="733.7" value20="848" />
                                <p style={{textAlign:"end"}}>(단위: 톤/일)</p>
                            </GraphBoxWrap>
                        </Fade>

                        <img src="images/쓰레기더미.png"
                             alt="쓰레기통 주변에 버려진 쓰레기"
                             style={{width:"40%", position:"absolute", bottom:"-50px",right:"0"}}/>
                        <img src="images/쓰레기.png"
                             alt="길바닥에 버려진 쓰레기"
                             style={{width:"85%", position:"absolute", bottom:"-90px",left:"0"}}/>
                        <img src="images/쓰레기.png" 
                             alt="길바닥에 버려진 쓰레기"
                             style={{width:"75%", position:"absolute", bottom:"-90px",right:"0"}}/>
                        <img src="images/쓰레기통.png"
                             alt="쓰레기통"
                             style={{width:"50%", position:"absolute", bottom:"-50px",left:"-80px"}}/>
                    </Article>
                    <Narration>
                        <Fade bottom>
                            <p>
                                코로나 확진자 증가에 따라 배달 건수가 증가하였으며,<br/>
                                이에 따라 재활용 폐기물 배출량이 증가하고 있습니다
                            </p>
                            <p>
                                많은 쓰레기가 나오고 있는 상황이지만<br/>
                                재활용률은 오히려 떨어졌다고 합니다
                            </p>
                        </Fade>
                        <Fade bottom>    
                            <p>
                                우리는 올바른 분리 배출과 일회용품 줄이기를 통해<br/>
                                쓰레기 문제를 해소하고 극곰이를 도와줄 수 있습니다.
                            </p>
                        </Fade>
                        <Fade bottom>
                            <p>
                                극곰이가 묻습니다.<br/>
                            </p>
                        </Fade>
                        <Fade bottom>
                            <GukgomQuestion>
                                    <SpeechBubble>
                                        당신의 분리수거 지식은 얼마나 되나요?<br/>
                                        당신은 얼마나 많은 쓰레기를 버리고 있나요?
                                    </SpeechBubble>
                                <img src="images/극곰이.png"
                                     alt="쓰랭 마스코트 극곰이"
                                     style={{height:"50%", margin:"0 auto"}}/>
                            </GukgomQuestion>
                        </Fade> 
                        <h2>쓰레기 등급과 랭킹을 확인해보세요!</h2>
                    </Narration>
                </MainBody>
                <MainFooter>
                    <TestButton onClick={() => window.location.replace("/test/userinfo")}>
                        테스트하기
                    </TestButton>
                    <Reference />
                </MainFooter>
            </Main>
        </div>
    )
}

export default MainPage;

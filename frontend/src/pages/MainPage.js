import { useState, useEffect, React } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Fade from "react-reveal/Fade";
import { GraphBox } from "../components/GraphBox";
import { Reference } from "../components/Reference";
import { AccumulateBox, Main, MainHeader, Letter,
        LetterContent, Writer, SadBear, MainBody,
        Narration, Analysis, ContentsHeader,
        Title, SubTitle, Article, Circle,
        GraphBoxWrap, SpeechBubble, GukgomQuestion,
        MainFooter, TestButton, Accent}  from '../styled_components/MainPageStyle';


function MainPage() {
    const [userCnt, setUserCnt] = useState(0)
    useEffect(()=>{
        const fetchEvents = async () =>{
            const res = await axios.get("/api")
            setUserCnt(res.data.user_cnt)
        }
        fetchEvents();
    },[])

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
                                    20년 <mark>총 배달 주문 건수는 19년에 비교해 약 78% 증가</mark>하였으며,<br/>
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
                                        19년 대비 20년의 재활용 폐기물은 평균 <Accent>18.8%</Accent> 증가하였습니다.<br/>
                                        배달 서비스 하루 주문량은 270만건에 이르고,<br/>
                                        이로 인해 발생되는 플라스틱 배달 쓰레기 발생량은 약 <Accent>830만개</Accent>입니다.<br/>
                                        배달 서비스 이용 시 <Accent>최소 3개의 배달 쓰레기가 발생</Accent>하는 것 입니다.<br/>
                                    </SubTitle> 
                                </Fade>
                        </ContentsHeader>
                        <Fade bottom>
                            <GraphBoxWrap>
                                <p style={{textAlign:"end"}}><Circle year="2019"/>2019<Circle/>2020</p>
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

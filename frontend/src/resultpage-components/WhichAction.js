import React, { useState,useEffect } from 'react';
import {WhichActionWrapper, WhichActionExample, WhichActionButtonWrapper} from '../styled_components/WhichActionStyle';
import { ResultWrapper } from '../styled_components/style';

function WhichAction({user_id,user_name,history}) {
    const [action,setAction] = useState(0);

    const kakaoBtnHandler = () => {
        const jsKey = '8706cc8542570435c7534b00e8a43674'; // Kakao JavaScript Key
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(jsKey);
        }
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '나의 쓰레기 등급은?!',
                description: '당신은 지구의 쓰레기에 얼마나 영향을 끼치시나요?',
                imageUrl: 'https://ssraeng.blob.core.windows.net/tier/grade_1.png',
                link: {
                    mobileWebUrl: 'https://www.twitch.tv/m_maeng93',
                    webUrl: 'https://www.twitch.tv/m_maeng93',
                },
            },
            buttons: [
                {
                    title: '웹으로 보기',
                    link: {
                    mobileWebUrl: 'https://www.twitch.tv/m_maeng93',
                    webUrl: 'https://www.twitch.tv/m_maeng93',
                    },
                },
            ],
        })
    };

    return (
        <ResultWrapper>
        <WhichActionWrapper>
            {
                action == 0 ?
                <WhichActionExample>
                <div><span>{user_name}</span> 님은 지구를 위해</div>
                <div> 어떤 행동을 하실건가요?</div>
                <WhichActionButtonWrapper>
                    <button onClick={()=>setAction(1)}>배달음식과 플라스틱 사용을 줄이고 분리수거를 잘한다</button>
                    <button onClick={()=>setAction(2)}>친구에게 내 쓰랭등급과 퀴즈를 공유한다</button>
                    <button onClick={()=>history.push(`/ranking/${user_id}`)}>그냥 지금처럼 산다</button>
                </WhichActionButtonWrapper>
                </WhichActionExample>:
                action==1?
                <WhichActionExample>
                    <div>좋아요!</div>
                    <div>앞으로 <span>{user_name}</span>님의 활약 기대하겠습니다!</div>
                    <div>수고하셨습니다!;)</div>
                    <WhichActionButtonWrapper>
                        <button  onClick={()=>history.push(`/ranking/${user_id}`)}>랭킹 보러가기</button>
                        <button id="kakao-link-btn" onClick={kakaoBtnHandler}>결과 공유하기</button>
                    </WhichActionButtonWrapper>
                </WhichActionExample>:
                action == 2?
                <WhichActionExample>
                    <div>다른사람들에게도 환경의 중요성을 알리는 <span>{user_name}</span>님!</div>
                    <div>정말 멋있습니다!</div>
                    <div>퀴즈 푸느라 수고하셨습니다!;)</div>
                    <WhichActionButtonWrapper><button id="kakao-link-btn" onClick={kakaoBtnHandler}>결과 공유하기</button></WhichActionButtonWrapper>
                </WhichActionExample>:
                    null
            }
        </WhichActionWrapper>
        </ResultWrapper>
    )
}

export default WhichAction;

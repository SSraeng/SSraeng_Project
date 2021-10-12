import React, { useState,useEffect } from 'react';

function WhichAction({user_id,user_name,history}) {
    const [action,setAction] = useState(0)
    return (
                    <div style={{align:"center"}}>
                        {
                            action == 0 ?
                            <div>
                            <div>지구를 위해</div>
                            <div>{user_name}님은 어떤 행동을 하실건가요?</div>
                            <button onClick={()=>setAction(1)}>1. 배달음식과 플라스틱 사용을 줄이고 분리수거를 잘한다</button>
                            <button onClick={()=>setAction(2)}>2. 친구에게 내 쓰랭등급과 퀴즈를 공유한다</button>
                            <button onClick={()=>history.push(`/ranking/${user_id}`)}>3. 그냥 지금처럼 산다</button>
                            </div>:
                            action==1?
                            <div>
                                <div>좋아요!</div>
                                <div>앞으로 {user_name}님의 활약 기대하겠습니다!</div>
                                <div>수고하셨습니다!;)</div>
                                <button  onClick={()=>history.push(`/ranking/${user_id}`)}>랭킹보러가기</button>
                                <button>결과 공유하기</button>
                            </div>:
                            action == 2?
                            <div>
                                <div>다른사람들에게도 환경의 중요성을 알리는 {user_name}님!</div>
                                <div>정말 멋있습니다!</div>
                                <div>퀴즈 푸느라 수고하셨습니다!;)</div>
                                <button  onClick={()=>history.push(`/ranking/${user_id}`)}>랭킹보러가기</button>
                                <button>결과 공유하기</button>
                            </div>:
                                null
                        }
                    </div>
    )
}

export default WhichAction;

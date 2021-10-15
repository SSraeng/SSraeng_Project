import React, { useState,useEffect } from 'react';
import { GradeWrapper } from '../styled_components/GradeStyle';

function Grade({data}) {
    const color=["red","orange","yellow","#87F717","green"]
    const [tierImage, setTierImage] = useState('https://ssraeng.blob.core.windows.net/tier/grade_1.png');
    const [score, setScore] = useState('?');
    const [ranking, setRanking] = useState('?');
    const [tier, setTier] = useState(5);
    const imageArray = ['https://ssraeng.blob.core.windows.net/tier/grade_1.png',
                        'https://ssraeng.blob.core.windows.net/tier/grade_2.png',
                        'https://ssraeng.blob.core.windows.net/tier/grade_3.png',
                        'https://ssraeng.blob.core.windows.net/tier/grade_4.png',
                        'https://ssraeng.blob.core.windows.net/tier/grade_5.png'];
    

    useEffect(()=>{
        let count = 0, index = 0, flag = 1;
        const interval = setInterval(() => {
            if(index === 4) flag = -1;
            else if(index === 0) flag = 1;
            index += flag;
            setTierImage(imageArray[index]);
            setTier(index+1);
            count ++;
            if(count === 15+data.tier_value){
                setTierImage(data.tier);
                setTier(data.tier_value);
                setScore(data.score);
                setRanking(data.ranking);
                clearInterval(interval);
            }
        }, 200);
    }, [])

    return (
            
        data?
            <div>
            <GradeWrapper color={color[tier-1]}>
                <h2>{data.user_name}님, 당신은</h2>
                <h1 >쓰랭
                    <a> {tier}등급</a>입니다.
                </h1>
                <img src={tierImage} alt="그림 수리중"/>
                <h2>총 점수는 {score} 점</h2>
                <h2>{data.participants}명 중 {ranking}등 입니다.</h2>
            </GradeWrapper>
            </div>:
            null
        
    )
}

export default Grade;

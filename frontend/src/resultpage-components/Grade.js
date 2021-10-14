import React, { useState,useEffect } from 'react';
import { GradeWrapper } from '../styled_components/GradeStyle';

function Grade({data}) {
    const color=["red","orange","yellow","#87F717","green"]
    return (
            
        data?
            <div>
            <GradeWrapper color={color[data.tier_value-1]}>
                <h2>{data.user_name}님, 당신은</h2>
                <h1 >쓰랭
                    <a> {data.tier_value}</a>등급입니다.
                </h1>
                <img src={data.tier} />
                <h2>총 점수는 {data.score} 점</h2>
                <h2>{data.participants}명 중 {data.ranking}등 입니다.</h2>
            </GradeWrapper>
            </div>:
            null
        
    )
}

export default Grade;

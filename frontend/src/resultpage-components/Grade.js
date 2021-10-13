import React, { useState,useEffect } from 'react';
import { ResultWrapper } from '../styled_components/style';

function Grade({data}) {

    return (
            
        data?
            <div>
            <ResultWrapper>
                <h4>{data.user_name}님, 당신은</h4>
                <h1>쓰랭 {data.tier_value}등급입니다.</h1>
                <img src={data.tier} width="300px "style={{marginTop:"2vh",margin:"0 auto" }} />
                <h2>총 점수는{data.score}점,</h2>
                <h2>{data.participants}명 중 {data.ranking}등 입니다.</h2>
            </ResultWrapper>
            </div>:
            null
        
    )
}

export default Grade;

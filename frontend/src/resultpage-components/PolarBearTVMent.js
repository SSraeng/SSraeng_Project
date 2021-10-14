import React, { useState,useEffect } from 'react';
import { PolarBearTVMentWrapper } from '../styled_components/PolarBearTVMentStyle';

function PolarBearTVMent({data}) {
    
    
    return (
        
        <div>
            <PolarBearTVMentWrapper>
                <h1>극곰이와 함께 현재 우리 지구의 모습을 시청해볼까요?</h1>
                <img src="../images/PolarBearHead.png" />
            </PolarBearTVMentWrapper>
        </div>
    )
}

export default PolarBearTVMent;

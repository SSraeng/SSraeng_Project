import React from 'react';
import { PolarBearTVMentWrapper } from '../styled_components/PolarBearTVMentStyle';
import Fade from "react-reveal/Fade";
function PolarBearTVMent({data}) {
    
    
    return (
        
        <div>
            <Fade >
            <PolarBearTVMentWrapper>
                <h1>극곰이와 함께 현재 우리 지구의 모습을 시청해볼까요?</h1>
                <img src="../images/PolarBearHead.png" alt="그림 수리중"/>
            </PolarBearTVMentWrapper>
            </Fade>
        </div>
    )
}

export default PolarBearTVMent;

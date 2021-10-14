import React, { useState,useEffect } from 'react';
import { ResultWrapper } from '../styled_components/style';
import { Content } from '../styled_components/RecycleTipStyle';

function RecycleTip({recycle_tip}) {
    console.log(recycle_tip);
    const [page, setPage] = useState(1);
    
    return (
        
        <ResultWrapper>
            <Content>그렇지만 플라스틱을 줄이거나 재활용을 잘 한다면 </Content>
            <Content>이 나무들을 심는것과 비슷한 효과를 낼 수 있겠어요! </Content>
            {
                recycle_tip.map((element,index)=>
                   index+1==page?<div className="slide"><img src={element} key={index} style={{width:"50vh", margin:"0 auto"}}></img></div>:null
                )
            }

            {   
                page<5?
                <button style={{width:"20vh"}}
                    onClick={()=>{
                    setPage(page+1);
                    }}>다음</button>:null
                }
                {
                page>1?
                    <button style={{width:"20vh"}}
                    onClick={()=>{
                        setPage(page-1);
                    }}>이전</button>:null
                }
        </ResultWrapper>
    )
}

export default RecycleTip;

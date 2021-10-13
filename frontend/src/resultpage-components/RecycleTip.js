import React, { useState,useEffect } from 'react';
import { ResultWrapper } from '../styled_components/style';

function RecycleTip({recycle_tip}) {
    console.log(recycle_tip.length)
    const [page, setPage] = useState(1)
    return (
        
        <ResultWrapper>
            <div>그렇지만 플라스틱을 줄이거나 재활용을 잘 한다면 </div>
            <div>이 나무들을 심는것과 비슷한 효과를 낼 수 있겠어요! </div>
            {
                recycle_tip.map((element,index)=>
                   index+1==page?<img src={element} key={index} style={{width:"50vh", margin:"0 auto"}}></img>:null
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

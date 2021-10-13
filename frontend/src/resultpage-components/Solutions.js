import React, { useState,useEffect } from 'react';
import explains from "../etc/explains.json"
import store,{reset_co2,plastic_reset} from '../redux_store/store';
import { ResultWrapper } from '../styled_components/style';
import { ButtonStyle, Img, Answer, Div } from '../styled_components/SolutionStyle';

function Solutions({oxlist}) {
    const explain = explains
    const [page,setPage] = useState(1);
    console.log(explain)
    console.log(explain[1].question)
    const oxList = ({oxlist})=>{
        const bf = oxlist.slice(0,page-1)
        const current = oxlist[page-1]
        const af = oxlist.slice(page)
        return (
            <div>
                {bf}
                <a style={{
                    fontWeight:"700",
                    color:`${current=="X"?"#D22318":"#1A55B9"}`
                    }}>{current}</a>
                {af} 
            </div>
        )
    }
    return (
            <div>
                <ResultWrapper>
                <h2>정오표</h2>
                <div>{oxList({oxlist})}</div>
                <div>
                {explains?
                    explain.map((element,index)=>
                    index+1==page?
                    <div key={index} style={{border:"solid 1px"}}>

                        <Div style={{color:`${oxlist[index]=="X"?"#D22318":"#1A55B9"}`}}>
                            {element.question}
                        </Div>

                        <Answer>
                                {element.answer}
                        </Answer>
                        <Div>
                            {element.type==1?
                            <div>{element.explain}</div>:
                            <Img src={element.explain}></Img>
                            }
                        </Div>
                        {
                        page>1?
                            <ButtonStyle onClick={()=>{
                                setPage(page-1);
                            }}>이전</ButtonStyle>:null
                        }
                        {
                        page<10?
                            <ButtonStyle onClick={()=>{
                                setPage(page+1);
                            }}>다음</ButtonStyle>:null
                        }
                    </div>:null
                    ):null
                } 
                </div>
                </ResultWrapper>
            </div>
    )
}

export default Solutions;

import React, { useState,useEffect } from 'react';
import explains from "../etc/explains.json"
import store,{reset_co2,plastic_reset} from '../redux_store/store';
function Solutions({oxlist}) {
    const explain = explains
    const [page,setPage] = useState(1);
    console.log(explain)
    console.log(explain[1].question)
    return (
            <div>
                <h4>정오표</h4>
                <div>{oxlist}</div>
                <div>
                {explains?
                    explain.map((element,index)=>
                    index+1==page?
                    <div key={index} style={{border:"solid 1px"}}>
                        <div style={{display:"flex"}}>
                            <div style={{color:`${oxlist[index]=="X"?"red":"blue"}`}}>
                                {element.question}
                            </div>
                        </div>
                        <div>
                                {element.answer}
                        </div>
                        <div>
                            {element.type==1?
                            <div>{element.explain}</div>:
                            <img src={element.explain}></img>
                            }
                        </div>
                        {
                        page<10?
                        <button onClick={()=>{
                            setPage(page+1);
                            store.dispatch(plastic_reset());
                            store.dispatch(reset_co2())
                         }}>다음</button>:null
                        }
                        {
                        page>1?
                            <button onClick={()=>{
                                setPage(page-1);
                                store.dispatch(plastic_reset());
                                store.dispatch(reset_co2())
                            }}>이전</button>:null
                        }
                    </div>:null
                    
                
                    ):null
                } 
                
            
                </div>
            </div>
    )
}

export default Solutions;

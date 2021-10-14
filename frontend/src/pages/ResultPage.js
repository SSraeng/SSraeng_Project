import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import store, { plastic_reset, reset_co2 } from '../redux_store/store';
import PlasticCal from '../resultpage-components/PlasticCal';
import axios from 'axios';
import { useHistory } from 'react-router';
import {Grade,PlasticResult,PolarBearTV,PolarBearTVMent,Solutions,WhichAction} from "../resultpage-components/components"
import ReactFullpage from "@fullpage/react-fullpage"
import { RecycleWrapper } from '../styled_components/RecycleTipStyle';
import { Content } from '../styled_components/RecycleTipStyle';
function ResultPage({match}) {
    const {params} = match
    const history = useHistory()
    const [resultData,setResultData] = useState(false);
    const user_id = store.getState().user_id[0]
    const result = store.getState().result[0]
    
     useEffect(()=>{
            const getResult = async () =>{

                const response= await axios.get(`/api/result/${params.user_id}`)
                const{data} = response 
                 setResultData(data)
                 }
                 if(!user_id)getResult();
                store.dispatch(plastic_reset()); 
                store.dispatch(reset_co2())
            
     },[])

     useEffect(()=>{
         if(result)
         console.log(result);
     })

    return (
        <div>
        
        <ReactFullpage 
        navigation
        scrollingSpeed = {500}

        render={({state,fullpageApi})=>{
            return(
            <div id="fullpage-wrapper">
                <div className="section " style={{display:"flex", }}>
                    
                    <NavBar/>
                    <Grade data={resultData?resultData:result?result:null}/>
                    
                </div>
                {result?
                    <div className="section">
                            
                            <Solutions oxlist={result.ox_list}/>
                                                                                
                        </div>
                    :null}
                    {result? <div className="section">
                            
                            <PlasticCal/>
                                                                                 
                        </div>
                    :null}
                    {result? <div className="section">
                            
                            <PlasticResult user_name={result.user_name}/>
                                                                                 
                        </div>
                    :null}
                    {result? 
                        <div className="section">
                            <RecycleWrapper>
                            <Content>그렇지만 플라스틱을 줄이거나 재활용을 잘 한다면 </Content>
                            <Content>이 나무들을 심는것과 비슷한 효과를 낼 수 있겠어요! </Content>
                            {
                result.all_recycle_tip.map((element,index)=>
                   <div className="slide"><img src={element} key={index} style={{width:"50vh", marginBottom:"30vh", marginTop:"-10vh"}}></img></div>
                )}
                </RecycleWrapper>
            
                                                                                 
                        </div>
                    :null}
                    {result? 
                        <div className="section">
                            
                            <PolarBearTVMent/>
                                                                                 
                        </div>
                    :null}
                    {result? 
                        <div className="section">
                            
                            <PolarBearTV content_url={result.content_url} content_image={result.content_image}/>
                                                                                 
                        </div>
                    :null}
                    {result? 
                        <div className="section">
    
                            <WhichAction user_id={user_id} user_name={result.user_name} history={history} tier={result.tier}/>
                                                      
                        </div>
                    :null}

            {!user_id?<button onClick={()=>history.replace("/test/userinfo")}>나도테스트해보기</button>:null}
            </div>
            )
        }}
            

        />
        </div>
    )
}

export default ResultPage;

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
import { MeTooButton, SharedResult } from '../styled_components/GradeStyle';

function ResultPage({match}) {
    const {params} = match
    const history = useHistory()
    const [resultData,setResultData] = useState(false);
    const user_id = store.getState().user_id[0]

    
    useEffect(()=>{
        const getResult = async () =>{
            const response= await axios.get(`/api/result/${params.user_id}`)
            const{data} = response 
            setResultData(data)
        }
        getResult();
        store.dispatch(plastic_reset()); 
        store.dispatch(reset_co2())

    },[])

    useEffect(()=>{
        if(resultData)
        console.log(resultData);
    })

    return (
        resultData && !user_id ? 
        <SharedResult>
            <NavBar/>
            <Grade data={resultData}/>
            <MeTooButton onClick={()=>history.replace("/test/userinfo")}>나도 테스트 해보기</MeTooButton>
        </SharedResult> :
        <div>
        
        <ReactFullpage 
        navigation
        scrollingSpeed = {500}

        render={({state,fullpageApi})=>{
            return(
            <div id="fullpage-wrapper">
                
                <div className="section" style={{display:"flex", }}>
                    
                    <NavBar/>
                    {resultData?
                    <Grade data={resultData}/>:
                    null}
                </div>
                {resultData?
                    <div className="section">
                            
                            <Solutions oxlist={resultData.ox_list}/>
                                                                                
                        </div>
                    :null}
                    {resultData? <div className="section">
                            
                            <PlasticCal/>

                        </div>
                    :null}
                    {resultData? <div className="section">
                            
                            <PlasticResult user_name={resultData.user_name}/>

                        </div>
                    :null}
                    {resultData? 
                        <div style={{width:"96vw"}} className="section">
                            <RecycleWrapper>
                            <Content>그렇지만 플라스틱을 줄이거나 재활용을 잘 한다면 </Content>
                            <Content>이 나무들을 심는것과 비슷한 효과를 낼 수 있겠어요! </Content>
                            {resultData.all_recycle_tip.map((element,index)=>
                                <div className="slide">
                                    <img src={element} key={index} style={{width:"50vh", marginBottom:"30vh", marginTop:"-10vh"}}></img>
                                </div>)}
                            </RecycleWrapper>                                               
                        </div>
                    :null}
                    {resultData? 
                        <div className="section">
                            
                            <PolarBearTVMent/>

                        </div>
                    :null}
                    {resultData? 
                        <div className="section">
                            
                            <PolarBearTV content_url={resultData.content_url} content_image={resultData.content_image}/>

                        </div>
                    :null}
                    {resultData?
                        <div className="section">
    
                            <WhichAction user_id={user_id} user_name={resultData.user_name} history={history} tier={resultData.tier}/>

                        </div>
                    :null}

            </div>
            )
        }}
            

        />
        </div>
    )
}

export default ResultPage;

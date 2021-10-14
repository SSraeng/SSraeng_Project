import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import store, { plastic_reset, reset_co2 } from '../redux_store/store';
import PlasticCal from '../resultpage-components/PlasticCal';
import axios from 'axios';
import { useHistory } from 'react-router';
import {Grade,PlasticResult,PolarBearTV,PolarBearTVMent,RecycleTip,Solutions,WhichAction} from "../resultpage-components/components"
import ReactFullpage from "@fullpage/react-fullpage"
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
                            
                            <RecycleTip recycle_tip={result.all_recycle_tip}/>
                                                                                 
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

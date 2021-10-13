import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import store, { plastic_reset, reset_co2 } from '../redux_store/store';
import PlasticCal from '../resultpage-components/PlasticCal';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import {Grade,PlasticResult,PolarBearTV,PolarBearTVMent,RecycleTip,Solutions,WhichAction} from "../resultpage-components/components"
import {Fade, Rotate,Flip, Zoom, Bounce,  Slide} from "react-reveal"
import {MiddleBlock, MiddleBlockF} from "../styled_components/style.js"
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
        <NavBar/>
        <ReactFullpage 
        render={({state,fullpageApi})=>{
            return(
            <div id="fullpage-wrapper">
                <div className="section section1">
                    <Fade top>
                        <Grade data={resultData?resultData:result?result:null}/>
                    </Fade>
                </div>
                {result?
                    <div className="section">
                            <Fade top>
                                <Solutions oxlist={result.ox_list}/>
                            </Fade>                                                     
                        </div>
                    :null}
                    {result? <div className="section">
                            <Fade top>
                                <PlasticCal/>
                            </Fade>                                                     
                        </div>
                    :null}
                    {result? <div className="section">
                            <Fade top>
                                <PlasticResult user_name={result.user_name}/>
                            </Fade>                                                     
                        </div>
                    :null}
                    {result? 
                        <div className="section">
                            <Fade top>
                                <RecycleTip recycle_tip={result.all_recycle_tip}/>
                            </Fade>                                                     
                        </div>
                    :null}
                    {result? 
                        <div className="section">
                            <Fade top>
                                <PolarBearTVMent/>
                            </Fade>                                                     
                        </div>
                    :null}
                    {result? 
                        <div className="section">
                            <Fade top>
                                <PolarBearTV content_url={result.content_url} content_image={result.content_image}/>
                            </Fade>                                                     
                        </div>
                    :null}
                    {result? 
                        <div className="section">
                            <Fade top>
                                <WhichAction user_id={result.user_id} user_name={result.user_name} history={history}/>
                            </Fade>                                                     
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

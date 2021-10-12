import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import store, { plastic_reset, reset_co2 } from '../redux_store/store';
import PlasticCal from '../components/PlasticCal';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import {Grade,PlasticResult,PolarBearTV,PolarBearTVMent,RecycleTip,Solutions,WhichAction} from "../resultpage-components/components"
function ResultPage({match}) {
    const {params} = match
    const history = useHistory()
    const [resultData,setResultData] = useState(false);

    const user_id = store.getState().user_id[0]
    const result = store.getState().result[0]
    const {ox_list, user_name, content_url, content_image}= result
    const [page,setPage]= useState(1)
     useEffect(()=>{
            const getResult = async () =>{

                const response= await axios.get(`/api/result/${params.user_id}`)
                const{data} = response 
                console.log(data)
                 setResultData(data)
                 }
                 if(!user_id)getResult();
     },[])

    return (
        <div>
            <NavBar/>
           {page==1?<Grade data={resultData?resultData:result?result:null}/>:null}
           {ox_list&&page==2?
            <Solutions oxlist={ox_list}/>
            :user_id&&page==3?
            <WhichAction user_id={user_id} user_name={user_name} history={history}/>
            
            :result&&page==4?
            <PolarBearTV content_url={content_url} content_image={content_image}/>
            :user_name&&page==5?
            <RecycleTip/>
            :user_name&&page==6?
            <PolarBearTVMent/>
            :user_name&&page==7?
            
            <PlasticResult user_name={user_name}/>
            :user_name&&page==8?
            <PlasticCal/>
            :
            null
            }
            {result&&page<8?
            <button onClick={()=>{setPage(page+1)}}>다음</button>:null
            }
            {
            result&&page>1?
            <button onClick={()=>setPage(page-1)}>이전</button>:null
            }

            

            {!user_id?<button onClick={()=>history.replace("/test/userinfo")}>나도테스트해보기</button>:null}

        </div>
    )
}

export default ResultPage;

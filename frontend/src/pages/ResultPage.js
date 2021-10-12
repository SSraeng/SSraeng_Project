import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import store from '../redux_store/store';
import PlasticCal from '../components/PlasticCal';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Grade from '../resultpage-components/Grade';
import WhichAction from '../resultpage-components/WhichAction';

function ResultPage({match}) {
    const {params} = match
    const history = useHistory()
    const [resultData,setResultData] = useState(false);

    const user_id = store.getState().user_id[0]
    const result= store.getState().result[0]
    if (user_id)
    {

        console.log(result)

    }

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
            <NavBar />
           { resultData?<Grade data={resultData}/>:result?<Grade data={result}/>:null}
            {result?<WhichAction user_id={user_id} user_name={result.user_name} history={history}/>:null}

                {!user_id?<button onClick={()=>history.replace("/test/userinfo")}>나도테스트해보기</button>:null}

        </div>
    )
}

export default ResultPage;

import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import store,{reset,submit} from '../redux_store/store';
import { first, second, third, fourth, fifth } from '../tests/level';
import PlasticCal from '../components/PlasticCal';
import axios from 'axios';

function ResultPage() {
    const [data,setData]= useState(null)
    const [page, setPage] = useState(1);
    useEffect(()=>{
        const testResult = async()=>{
            try{
                setData(null);
                console.log(store.getState().test[0])
                const userId = await axios.post("/api/analysis",store.getState().test[0]);
                console.log(userId)
                const response= await axios.get(`/api/result/${userId.data}`)
                console.log(response.data);
                setData(response.data)
            }catch(e){
                console.log(e)
            }
        }
        

        testResult();
    },[])

    return (
        <div >
            <NavBar />
            {
            data?
            <div style={{position: "absolute",left: "50%",transform: "translate(-50%)", textAlign:"center"}}>
                <div style={{margin:"auto", textAlign:"center", marginTop:"10vh" }}/>
                <h1 style={{textAlign:"center"}}>{data.user_name}의  점수</h1>
                <h2 style={{textAlign:"center"}}>{data.score}</h2>
                <div>
                <img src={data.tier} width="300px"style={{marginBottom:"5vh" }} /></div>
                <div>
                <img src={data.recycle_tip} width="300px"style={{marginBottom:"5vh"}}/></div>
                
                <div>{data.content_text}</div>
                <a href={data.content_url}><img width = "300vh" src={data.content_image}/></a>
                
                <PlasticCal/>
            </div>

            :null
            }

            
        </div>
    )
}

export default ResultPage;

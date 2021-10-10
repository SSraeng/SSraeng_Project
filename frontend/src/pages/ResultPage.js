import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import store,{reset,submit} from '../redux_store/store';
import { first, second, third, fourth, fifth } from '../tests/level';
import PlasticCal from '../components/PlasticCal';
import axios from 'axios';

function ResultPage() {

    const [page, setPage] = useState(1);

    const data= store.getState().result
    const {user_name,
        score,
        tier,
        recycle_tip,
        content_text,
        content_url,
        content_image
     } = store.getState().result[0]
    console.log(data);
    return (
        <div >
            <NavBar />
            {
            data?
            <div style={{position: "absolute",left: "50%",transform: "translate(-50%)", textAlign:"center"}}>
                <div style={{margin:"auto", textAlign:"center", marginTop:"10vh" }}/>
                <h1 style={{textAlign:"center"}}>{user_name}의  점수</h1>
                <h2 style={{textAlign:"center"}}>{score}</h2>
                <div>
                <img src={tier} width="300px"style={{marginBottom:"5vh" }} /></div>
                <div>
                <img src={recycle_tip} width="300px"style={{marginBottom:"5vh"}}/></div>
                
                <div>{content_text}</div>
                <a href={content_url}><img width = "300vh" src={content_image}/></a>
                
                <PlasticCal/>
            </div>

            :null
            }

            
        </div>
    )
}

export default ResultPage;

import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import store,{reset,submit} from '../redux_store/store';
import PlasticCal from '../components/PlasticCal';
import axios from 'axios';
import { useHistory } from 'react-router';


function ResultPage() {

    const [page, setPage] = useState(1);
    const history = useHistory()
    const data= store.getState().result[0]
    const {user_name,
        score,
        tier,
        recycle_tip,
        content_text,
        content_url,
        content_image
     } = data
     const datalist = [
         user_name,
        score,
        tier,
        recycle_tip,
        content_text,
        content_url,
        content_image
    ]
    return (
        <div >
            <NavBar />
            <div align="center" ><img src="images/result_polarbear.jpg" style={{width:"80vh", 
        }} ></img></div>
            {
            data?
            <div style={{position: "absolute",left: "50%",transform: "translate(-50%)", textAlign:"center"}}>
                <div style={{margin:"auto", textAlign:"center", marginTop:"10vh" }}/>
                
                <div style={{display:'flex', alignContent:"center"}}>
                    {page !=1?
                        <div style={{margin:"auto", paddingRight:"2vh"}} onClick={()=>setPage(page-1)}>
                            〈
                        </div>:
                        null
                    }
                    {page == 1?
                    
                    <div style={{marginLeft:"2vh", marginTop:"2vh"}}>
                        <h1 style={{textAlign:"center"}}>{user_name}의  점수</h1>
                        <h2 style={{textAlign:"center"}}>{score}</h2>
                        <div>
                            <img src={tier} width="300px"style={{marginTop:"2vh",marginBottom:"5vh", display:"block" }} />
                        </div>
                        
                    </div>:
                    page == 2?
                    <div>
                    <img src={recycle_tip} width="300px"style={{marginBottom:"5vh"}}/>
                    </div>:
                    page ==3?
                    <div>
                        <div>{content_text}</div>
                        <a href={content_url}>
                            <img width = "300vh" src={content_image}/>
                        </a>
                    </div>:
                    page == 4?
                    <PlasticCal/>:
                    null
                    }
                    {page !=4?
                    <div style={{margin:"auto", paddingLeft:"2vh"}} onClick={()=>setPage(page+1)}>
                        〉
                    </div>:
                    null
                    }
                </div>
                
                
                <button onClick={()=>history.replace("/ranking")}>나의 랭킹 확인하기</button>
            </div>

            :null
            }

            
        </div>
    )
}

export default ResultPage;

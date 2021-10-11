import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import store from '../redux_store/store';
import PlasticCal from '../components/PlasticCal';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';


function ResultPage({match}) {
    const {params} = match
    const [page, setPage] = useState(1);
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
                 getResult();
     },[])

    return (
        <div>
            <NavBar />
            <div style={{position: "absolute",left: "50%",transform: "translate(-50%)", textAlign:"center"}}>
                <div style={{margin:"auto", textAlign:"center", marginTop:"10vh" }}/>
                <div style={{display:'flex', alignContent:"center"}}>
                    {page !=1?
                        <div style={{margin:"auto", paddingRight:"2vh"}} onClick={()=>setPage(page-1)}>
                            〈
                        </div>:
                        null
                    }
                    {!user_id&&page == 1?
                    
                    <div style={{marginLeft:"2vh", marginTop:"2vh"}}>
                        <h1 style={{textAlign:"center"}}>{resultData.user_name}의  점수는</h1>
                        <h2 style={{textAlign:"center"}}>{resultData.score}점으로,</h2>
                        <h2 style={{textAlign:"center"}}>{resultData.participants}명 중 {resultData.ranking}등 입니다.</h2>
                        <div>
                            <img src={resultData.tier} width="300px"style={{marginTop:"2vh",marginBottom:"5vh", display:"block" }} />
                        </div>
                        
                    </div>:
                    !user_id&&page == 2?
                    <div>
                    <img src={resultData.recycle_tip} width="300px"style={{marginBottom:"5vh"}}/>
                    </div>:
                    !user_id&&page ==3?
                    <div>
                        <div>{resultData.content_text}</div>
                        <a href={resultData.content_url} target="_blank">
                            <img width = "300vh" src={resultData.content_image}/>
                        </a>
                    </div>:
                    !user_id&&page == 4?
                    <PlasticCal/>:
                    null
                    }
                    {/* {
                        result&&page==1?
                        <div style={{marginLeft:"2vh", marginTop:"2vh"}}>
                            <h1 style={{textAlign:"center"}}>{userResult.user_name}의  점수는</h1>
                            <h2 style={{textAlign:"center"}}>{userResult.score}점으로,</h2>
                            <h2 style={{textAlign:"center"}}>{userResult.participants}명 중 {userResult.ranking}등 입니다.</h2>
                            <div>
                                <img src={userResult.tier} width="300px"style={{marginTop:"2vh",marginBottom:"5vh", display:"block" }} />
                            </div>
                        
                        </div>:null
                        // user_id&&page==2?
                    } */}




                    {!user_id&&page !=4?
                    <div style={{margin:"auto", paddingLeft:"2vh"}} onClick={()=>setPage(page+1)}>
                        〉
                    </div>:
                    null
                    }
                </div>
                
                
                <button onClick={()=>history.replace(user_id?`/ranking/${user_id}`:"/test/userinfo")}>{user_id?"나의 랭킹 확인하기":"나도 테스트해보기"}</button>
            </div>
        </div>
    )
}

export default ResultPage;

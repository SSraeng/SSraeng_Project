import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { RankElement } from '../styled_components/style';
function RankingPage() {
    const [ranks, setRanks] = useState(null)
    const [start,setStart]= useState(1);
    const getRanking = async () =>{
        const response= await axios.get("/api/ranking")

        const{data} = response
        setRanks(data);
        console.log(data)
    }
    return (
        <div >
            <NavBar />

            <button onClick={getRanking}>랭킹불러오기</button>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>    
                <RankElement width={1}></RankElement>
                <RankElement width={10}>이름</RankElement>
                <RankElement width={2}>등급</RankElement>
                <RankElement width={4}>배달 횟수</RankElement>
                <RankElement width={5}>퀴즈 점수</RankElement>
                <RankElement width={4}>총 점수</RankElement> 
            </div>
            <div >
            {ranks?
            ranks.slice(start,start+15).map((element,index)=>
            <div key={index} style={{display:"flex", justifyContent:"space-evenly"}} >
            <RankElement width={1}>{index+start}</RankElement>
            <RankElement width={10}>{element.name}</RankElement>
            <RankElement width={2}>{element.tier}</RankElement>
            <RankElement width={4}>{element.delivery_count}</RankElement>
            <RankElement width={5}>{element.quiz_score}</RankElement>
            <RankElement width={4}>{element.total_score}</RankElement>
             </div>
            ):null}
            </div>
            {start > 14? <button onClick={()=>{setStart(start-15)}}>이전으로</button>: null}
            {
            !ranks? null:
            start < ranks.length?<button onClick={()=>{setStart(start+15)}}>다음으로</button>:null
            }
        </div>
    )
}

export default RankingPage;

import React, { useState,useEffect } from 'react';
import NavBar from '../components/NavBar';
import store,{reset,submit} from '../redux_store/store';
import { first, second, third, fourth, fifth } from '../tests/level';
import PlasticCal from '../components/PlasticCal';
import axios from 'axios';

function ResultPage() {
    // const [score,setScore]= useState(null)
    // const [src, setSrc]= useState(null)
    // useEffect(()=>{
    //     const testResult = async()=>{
    //         try{
    //             setScore(null);
    //             setSrc(null);
    //             const userId = await axios.post("/api/analysis",store.getState().test[0]);
    //             const response= await axios.get(`/api/result?user_id=${response.data.user_id}`)
    //             setScore(response.data.score)
    //             setSrc(response.data.tier)
    //         }catch(e){
    //             console.log(e)
    //         }
    //     }
        

    //     testResult();
    // },[])

    const result = []
    let index = 0
    const answer = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    let src = ""
    for (let i of store.getState().test[0].answers) {
        if (answer[index] == i)
            result.push(1)
        else
            result.push(0)
        index += 1
    }
    const score = result.reduce(function add(a, b) { return a + b; }, 0) * 10
    src = score < 50 ? fifth : score < 70 ? fourth : score < 90 ? third : score < 100 ? second : first

    return (
        <div >
            <NavBar />
            <p>나의  점수</p>
            <div>{score}</div>
            <img src={src} width="300px"></img>
            <PlasticCal/>
        </div>
    )
}

export default ResultPage;

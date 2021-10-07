import React, { useState, useEffect } from 'react';
import test from "../tests/test.json"
import store, { add } from '../redux_store/store';
import axios from 'axios';
import {Hover} from "../styled_components/Hover"
function Tests({ num }) {
   
        const [test,setTest] = useState([]);
        const [clickedNum, setClickedNum] = useState(Array(10).fill(0))
        useEffect(()=>{
            const fetchTest = async()=>{
                try{
                    setTest([]);
                    const  response = await axios.get("/api/test/test");
                    setTest(response.data);
                }catch(e){
                    console.log(e)
                }
            }
            
    
            fetchTest();
        },[])
    

    return (

        <div>
            
             {
             test.length === 0 ? <div> Loading... </div> :
            <div style={{ textAlign:"center"}}>
                 <h3>Q{num}.{test[num-1].question}</h3>
                {test[num-1].examples.map((answer, i) =>
                    
                    <div key={i} style={{ 
                    width:"35vh", height:"5vh", backgroundColor: clickedNum[num-1] == i+1 ? "#2aa6dc" : '#e7feff' 
                    , margin:"auto", marginTop:"1vh"
                    ,borderRadius: "2vh"}}
                        onClick={(e) => {
                            store.dispatch(add({ index: num - 1, submit: i + 1 }));

                            setClickedNum(clickedNum.map((element, index) => {return index+1 == num ? element = i+1 : element}));

                        }}><Hover><div>{answer}</div></Hover></div>
                        
                        )}
            </div>
            }
        </div>

    );
}

export default Tests;

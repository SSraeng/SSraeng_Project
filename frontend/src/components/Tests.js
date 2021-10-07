import React, { useState, useEffect } from 'react';
import test from "../tests/test.json"
import store, { add } from '../redux_store/store';
// import { Hover } from '../styled_components/Hover';
import axios from 'axios';
function Tests({ num }) {
   
        const [test,setTest] = useState([]);
        const [clickedNum, setClickedNum] = useState(Array(10).fill(0))
        useEffect(()=>{
            const fetchTest = async()=>{
                try{
                    setTest([]);
                    const  response = await axios.get("/api/test/test");
                    setTest(response.data);
                    console.log(response.data[0].question);
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
            <div>
                 {test[num-1].question}
                <p></p>
                {test[num-1].examples.map((answer, i) =>
                    
                    <div key={i} style={{ backgroundColor: clickedNum[num-1] == i+1 ? 'blue' : 'red' }}
                        onClick={(e) => {
                            store.dispatch(add({ index: num - 1, submit: i + 1 }));
                            setClickedNum(clickedNum.map((element, index) => {return index+1 == num ? element = i+1 : element}));

                        }}>{`${i + 1}.`}{answer}</div>
                        )}
            </div>
            }
        </div>

    );
}

export default Tests;

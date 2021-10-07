import React,{useEffect, useState} from 'react';
// import test from "../tests/test.json"
import store, { add } from '../redux_store/store';
import axios from 'axios';


function Tests({num}) {
    const [test,setTest] = useState([]);
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
            {test.length === 0 ? <div> Loading... </div> :
            <div>
                {test[num].question}
                <p></p>
                {test[num].examples.map((answer, index)=>
                    <div key={index} onClick={() => { store.dispatch(add(index + 1)); 
                   }}>{`${index+1}.`}{answer}</div>)}
            </div>
        }
        </div>
    );
}

export default Tests;
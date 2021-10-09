import React, { useState, useEffect } from 'react';
import test from "../tests/test.json"
import store, { add, page_plus } from '../redux_store/store';
import axios from 'axios';
import {Hover} from "../styled_components/Hover"
import { polarbear } from '../etc/photos';
import { useSelector } from 'react-redux';
function Tests() {
        const num = useSelector(state=>state.test_page[0])
        const [test,setTest] = useState([]);
        const [clickedNum, setClickedNum] = useState(Array(10).fill(0))
        useEffect(()=>{
            const fetchTest = async()=>{
                try{
                    setTest([]);
                    const  response = await axios.get("/api/test/test");
                    setTest(response.data);
                    console.log(response.data)
                }catch(e){
                    console.log(e)
                }
            }
            
    
            fetchTest();
        },[])


    return (

        <div>
            
             {
             test.length === 0 ? <div><img style={{position: "fixed",left: "50%",transform: "translate(-50%)"}} src={polarbear}/></div> :
            <div style={{ textAlign:"center"}}>
                    <h2></h2>
                 <h3>Q{num+1}.{test[num].question}</h3>
                {test[num].examples.map((answer, i) =>
                    <Hover >
                    <div  key={i} style={{ 
                    width:"35vh", height:"5vh", backgroundColor: clickedNum[num] == i+1 ? "#2aa6dc" : '#e7feff' 
                    , margin:" 0 auto", marginTop:"1vh"
                    ,borderRadius: "2vh", display:"flex", flexDirection:"column",justifyContent:"center"
                      }}
                        onClick={(e) => {
                            store.dispatch(add({ index: num, submit: i + 1 }));
                            if(num<9){store.dispatch(page_plus())};
                            setClickedNum(clickedNum.map((element, index) => {return index == num ? element = i+1 : element}));
                        }}><div>{answer}</div></div>
                        </Hover>
                        
                        )}
            </div>
            }
        </div>

    );
}

export default Tests;

import React, { useState, useEffect } from 'react';
import store, { add, page_plus, start,stopwatch_start, add_checked } from '../redux_store/store';
import axios from 'axios';
import {Select} from "../styled_components/style"
import { polarbear } from '../etc/photos';
import { useSelector } from 'react-redux';
function Tests() {
        const num = useSelector(state=>state.test_page[0])
        const [test,setTest] = useState([]);
        const clicked_arr = useSelector(state=>state.checked[0])
        
        useEffect(()=>{
            const fetchTest = async()=>{
                try{
                    setTest([]);
                    const response = await axios.get("/api/test/test");
                    setTest(response.data);
                    store.dispatch(stopwatch_start())
                    store.dispatch(start())
                    console.log(store.getState().test[0])
                    
                }catch(e){
                    console.log(e)
                }
            }
    
            fetchTest();

        },[])
        useEffect(()=>{
            console.log(clicked_arr)
        },[clicked_arr])

    return (

        <div>
            
             {
             test.length === 0 ? 
             <div>
                 <img style={{position: "fixed",left: "50%",transform: "translate(-50%)"}} src={polarbear} alt="그림 수리중"/>
            </div> :
            <div style={{ textAlign:"center"}}>
                    <h2></h2>
                 <h2>Q{num+1}.{test[num].question}</h2>
                 <h4 style={{paddingLeft:"45vh"}}>정답률:{test[num].ratio.toFixed(2)}%</h4>
                {test[num].examples.map((answer, i) =>
                    <Select num={clicked_arr[num]} i={i} key={i}
                        onClick={(e) => {
                            store.dispatch(add({ index: num, submit: i + 1 }));
                            store.dispatch(add_checked(clicked_arr.map((element, index) => index === num ? element = i+1 : element)));
                            if(num<9){store.dispatch(page_plus())};
                        }}>
                        <div>{answer}</div>
                    </Select>
                        
                        )}
            </div>
            }
        </div>

    );
}

export default Tests;

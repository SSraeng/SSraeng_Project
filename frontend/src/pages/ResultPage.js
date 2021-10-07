import React,{useEffect,useState} from 'react';
import NavBar from '../components/NavBar';
import store,{reset} from '../redux_store/store';
import { first, second, third, fourth, fifth } from '../tests/level';
import PlasticCal from '../components/PlasticCal';
import { Provider } from 'react-redux';
import axios from 'axios';

function ResultPage() {
    const [score,setScore]= useState(null);
    const [src, setSrc] = useState(null);
    const data = store.getState().test[0]
    console.log(data) 
    useEffect(()=>{
        const fetchTest = async()=>{
            try{
                setScore(null);
                setSrc(null);
                const  response = await axios.post("/api/analysis",data);
            }catch(e){
                console.log(e)
            }
        }
        

        fetchTest();
    },[])
    
    return (
        <div >
            <NavBar />
            <p>나의  점수</p>
            <div>{score}</div>
            <img src={src} width="300px"></img>
            
        <Provider store={store}>
            <PlasticCal/>
        </Provider>
        </div>
    )
}

export default ResultPage;

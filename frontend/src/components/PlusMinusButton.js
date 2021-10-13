import React,{useEffect, useState} from 'react';
import store,{plastic_add,plastic_minus,co2_e} from '../redux_store/store';

function CO2Cal(addNumber,pm){
    if(addNumber===14)
    store.dispatch(co2_e(33*pm))
    if(addNumber==10)
    store.dispatch(co2_e(19*pm))
    if(addNumber==15)
    store.dispatch(co2_e(36*pm))
    if(addNumber==44)
    store.dispatch(co2_e(72*pm))
}

function PlusMinusButton({title,addNumber}) {
    const [times, setTimes] = useState(0)
    const buttonStyle={border:"0",width:"2vh", backgroundColor:"#2aa6dc" ,marginBottom:"1vh"}
    return (
        <div>
           <h5>{title}</h5>
           <button style={buttonStyle}
           onClick={times >= 1 ? () => {
                setTimes(times - 1);
                store.dispatch(plastic_minus(addNumber));
                CO2Cal(addNumber,-1)
            }
                : null}>
                -
            </button>
            <input style={{textAlign:"center"}} value={times} onChange={(e) => setTimes(parseInt(e.target.value))} readOnly/>
            <button style={buttonStyle}
            onClick={() => {
                setTimes(parseInt(times + 1));
                store.dispatch(plastic_add(addNumber));
                CO2Cal(addNumber,1)
            }}>
                +
            </button>

            <p></p>
        </div>
    );
}

export default PlusMinusButton;

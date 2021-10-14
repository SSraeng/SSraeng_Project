import React,{useEffect, useState} from 'react';
import store,{plastic_add,plastic_minus,co2_e} from '../redux_store/store';
import { ButtonStyle, Input, Img } from '../styled_components/PlasticCalStyle';

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

function PlusMinusButton({title, img, addNumber}) {
    const [times, setTimes] = useState(0)
    return (
        <div>
            <Img src={img}/>
            <h4 style={{fontSize:"3vh"}}>{title}</h4>
            <ButtonStyle
            onClick={times >= 1 ? () => {
                    setTimes(times - 1);
                    store.dispatch(plastic_minus(addNumber));
                    CO2Cal(addNumber,-1)
                }
                    : null}>
                    -
                </ButtonStyle>
                <Input style={{textAlign:"center"}} value={times} onChange={(e) => setTimes(parseInt(e.target.value))} readOnly/>
                <ButtonStyle
                onClick={() => {
                    setTimes(parseInt(times + 1));
                    store.dispatch(plastic_add(addNumber));
                    CO2Cal(addNumber,1)
                }}>
                    +
                </ButtonStyle>

            <p></p>
        </div>
    );
}

export default PlusMinusButton;

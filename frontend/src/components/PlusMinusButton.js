import React,{useEffect, useState} from 'react';
import store,{plastic_add,plastic_minus} from '../redux_store/store';
function PlusMinusButton({title,addNumber}) {
    const [times, setTimes] = useState(0)
    const buttonStyle={border:"0",width:"2vh", backgroundColor:"#2ac1bc" ,marginBottom:"1vh"}
    return (
        <div>
           <h5>{title}</h5>
           <button style={buttonStyle}
           onClick={times >= 1 ? () => {
                setTimes(times - 1);
                store.dispatch(plastic_minus(addNumber));
            }
                : null}>
                -
            </button>
            <input style={{textAlign:"center"}} value={times} onChange={(e) => setTimes(parseInt(e.target.value))} readOnly/>
            <button style={buttonStyle}
            onClick={() => {
                setTimes(parseInt(times + 1));
                store.dispatch(plastic_add(addNumber));
            }}>
                +
            </button>

            <p></p>
        </div>
    );
}

export default PlusMinusButton;

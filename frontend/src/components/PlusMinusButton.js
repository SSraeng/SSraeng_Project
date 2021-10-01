import React,{useEffect, useState} from 'react';
import plastic_store,{plastic_add,plastic_minus} from '../redux_store/plastic_store';
function PlusMinusButton({title,addNumber}) {
    const [times, setTimes] = useState(0)
    
    return (
        <div>
           <label>{title}</label>
            <input value={times} type="number" onChange={(e) => setTimes(parseInt(e.target.value))} />
            <button onClick={() => {
                setTimes(parseInt(times + 1));
                plastic_store.dispatch(plastic_add(addNumber));
            }}>
                +
            </button>
            <button onClick={times >= 1 ? () => {
                setTimes(times - 1);
                plastic_store.dispatch(plastic_minus(addNumber));
            }
                : null}>
                -
            </button>
            <p></p>
        </div>
    );
}

export default PlusMinusButton;

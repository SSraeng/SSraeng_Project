import React,{useState} from 'react';

function PlasticCal() {
    const [times, setTimes] = useState(0)
    return (
        <div>
           <label>일주일 간 배달 건수</label>
            <input value={times} type="number" onChange={(e) => setTimes(parseInt(e.target.value))} />
            <button onClick={() => setTimes(parseInt(times + 1))}>+</button>
            <button onClick={times > 1 ? () => setTimes(times - 1) : null}>-</button>
            <p></p>
        </div>
    );
}

export default PlasticCal;

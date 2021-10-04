import React,{useEffect, useState} from 'react';
import PlusMinusButton from './PlusMinusButton';
import plastic_store,{reset} from '../redux_store/plastic_store';
function PlasticCal() {
    const [sum, setSum] = useState(0)
    const [result, setResult] = useState(0)
    return (
        <div>
            <div>플라스틱 계산기</div>
            <PlusMinusButton title="비닐봉지" addNumber={10} />
            <PlusMinusButton title="배달용기" addNumber={44} />
            <PlusMinusButton title="일회용컵" addNumber={14} />
            <PlusMinusButton title="PET" addNumber={15} />
            <button onClick={() => { setResult(plastic_store.getState()[0]);}}>결과보기</button>
            <p></p>
            당신이 일주일간 배달로 소비하는 플라스틱의 양은
            <p></p>
            {result}g입니다.
        </div>
    );
}

export default PlasticCal;

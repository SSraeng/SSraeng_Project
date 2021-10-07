import React,{useEffect, useState} from 'react';
import PlusMinusButton from './PlusMinusButton';
import store,{reset} from '../redux_store/store';
import {useSelector} from "react-redux";


function PlasticCal() {
    const [sum, setSum] = useState(0)
    const plastic = useSelector(state=>state.plastic)
    return (
        <div>
            <div>플라스틱 계산기</div>
            <PlusMinusButton title="비닐봉지" addNumber={10} />
            <PlusMinusButton title="배달용기" addNumber={44} />
            <PlusMinusButton title="일회용컵" addNumber={14} />
            <PlusMinusButton title="PET" addNumber={15} />
            <p></p>
            당신이 일주일간 배달로 소비하는 플라스틱의 양은
            <p></p>
            {plastic}g입니다.
        </div>
    );
}

export default PlasticCal;

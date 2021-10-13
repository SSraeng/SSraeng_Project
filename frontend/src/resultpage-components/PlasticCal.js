import React,{useEffect, useState} from 'react';
import PlusMinusButton from '../components/PlusMinusButton';
import store from '../redux_store/store';
import {useSelector} from "react-redux";
import { ResultWrapper } from '../styled_components/style';

function PlasticCal() {
    const [sum, setSum] = useState(0)
    const plastic = useSelector(state=>state.plastic[0])
    return (
        <ResultWrapper>
            <h3>평소에 플라스틱을 얼마나 사용하는지 계산해보세요!</h3>
            <PlusMinusButton title="비닐봉지" addNumber={10} />
            <PlusMinusButton title="배달용기" addNumber={44} />
            <PlusMinusButton title="일회용컵" addNumber={14} />
            <PlusMinusButton title="PET" addNumber={15} />
            <p></p>
            현재 일주일간 배달로 소비하는 플라스틱의 양은
            <p></p>
            {plastic}g입니다.
        </ResultWrapper>
    );
}

export default PlasticCal;

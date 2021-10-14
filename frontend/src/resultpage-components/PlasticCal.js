import React,{useEffect, useState} from 'react';
import PlusMinusButton from '../components/PlusMinusButton';
import store from '../redux_store/store';
import {useSelector} from "react-redux";
import { ResultWrapper } from '../styled_components/style';
import { Title, Content, Plastic, Container } from '../styled_components/PlasticCalStyle';
import {plasticbag,container,cup,pet} from "../etc/photos"

function PlasticCal() {
    const [sum, setSum] = useState(0)
    const plastic = useSelector(state=>state.plastic[0])
    return (
        <ResultWrapper>
            <Title>일주일에 플라스틱을 얼마나 사용하는지 계산해보세요!</Title>
            <Container>
                <PlusMinusButton title="비닐봉지" img={plasticbag} addNumber={10} />
                <PlusMinusButton title="배달용기" img={container} addNumber={44} />
                <PlusMinusButton title="일회용컵" img={cup} addNumber={14} />
                <PlusMinusButton title="PET" img={pet} addNumber={15} />
            </Container>
            <Content>
            현재 일주일간 배달로 소비하는 플라스틱의 양은
            </Content>
            <Title><Plastic>{plastic}g</Plastic>입니다.</Title>
        </ResultWrapper>
    );
}

export default PlasticCal;

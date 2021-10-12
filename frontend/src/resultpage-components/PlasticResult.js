import React, { useState,useEffect } from 'react';
import store from '../redux_store/store';
import { useSelector } from 'react-redux';
function PlasticResult({user_name}) {
    const plastic_gram =useSelector(state=>state.plastic[0])
    const CO2e= store.getState().co2[0]
    const tree= (CO2e*52)/(10*1000)
    return (
            <div>
                <div>{user_name}님은 평소</div>
                <div>일주일에 {plastic_gram}g,</div>
                <div>1년에 {plastic_gram*52/1000}kg 의 플라스틱을 소비하며</div>
                <div>일주일에 {CO2e},</div>
                <div>1년에 {CO2e*52/1000}kg 의 탄소발자국을 남깁니다.</div>
                    <div>1년동안 이런 생활을 한다면?</div>

                    <div>30년생 신갈나무 {tree}그루가 필요합니다</div>
            </div>
    )
}

export default PlasticResult;

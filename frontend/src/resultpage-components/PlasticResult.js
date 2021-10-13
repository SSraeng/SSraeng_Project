import React, { useState,useEffect } from 'react';
import store from '../redux_store/store';
import { useSelector } from 'react-redux';
import { ResultWrapper } from '../styled_components/style';
import { tree } from '../etc/photos';
function PlasticResult({user_name}) {
    const plastic_gram =useSelector(state=>state.plastic[0])
    const CO2e= useSelector(state=>state.co2[0])
    const trees= (CO2e*52)/(10*1000)
    return (

            <div>
            <ResultWrapper>
                <div>{user_name}님은 평소</div>
                <div>일주일에 {plastic_gram}g,</div>
                <div>1년에 {plastic_gram*52/1000}kg 의 플라스틱을 소비하며</div>
                <div>일주일에 {CO2e}CO2e,</div>
                <div>1년에 {CO2e*52/1000}CO2e 의 탄소발자국을 남깁니다.</div>
                <div>1년동안 이런 생활을 한다면?</div>

                <div>30년생 신갈나무 {trees}그루가 필요합니다</div>
                <div>
                {
                    trees > 0? (() => { 
                        const array = []; 
                        for(let i = 0; i < Math.ceil(trees); i++)
                        { 
                            array.push(<img src={tree}/>); 
                        } 
                        return array; })() : null
                }
                </div>
                
            </ResultWrapper>

            </div>
    )
}

export default PlasticResult;

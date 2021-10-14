import React, { useState,useEffect } from 'react';
import store from '../redux_store/store';
import { useSelector } from 'react-redux';
import { Highlight, Content,  PlasticResultWrapper } from '../styled_components/PlasticResultStyle';
import { tree } from '../etc/photos';
import styled from 'styled-components';

const TreeImg = styled.img`
    height:10vh;
    width:${props=>5*props.cutwidth}vw;


`
function PlasticResult({user_name}) {
    const plastic_gram =useSelector(state=>state.plastic[0])
    const CO2e= useSelector(state=>state.co2[0])
    const trees= (CO2e*52)/(10*1000)
    return (

            <div style={{textAlign:"center"}}>
            <PlasticResultWrapper>
                <Content>
                    {user_name}님은 평소<br/>
                    일주일에 {plastic_gram}g,<br/>
                    1년에 {plastic_gram*52/1000}kg 의 플라스틱을 소비하며<br/>
                    일주일에 <Highlight>&nbsp;{CO2e}g&nbsp;</Highlight> CO2e,<br/>
                    1년에 <Highlight>&nbsp;{CO2e*52/1000}kg&nbsp;</Highlight> CO2e 의 탄소발자국을 남깁니다.<br/><br/>
                    1년동안 이런 생활을 한다면?<br/>
                    30년생 신갈나무 <Highlight>&nbsp;{trees}그루&nbsp;</Highlight> 가 필요합니다
                </Content>
                <div>
                {
                    trees > 0? (() => { 
                        const array = []; 
                        for(let i = 0; i < Math.floor(trees); i++)
                        { 
                            array.push(<img src={tree} style={{height:"10vh", width:"5vw"}}/>); 
                        } 
                        return array; })() : null
                }
                {trees-Math.floor(trees)!=0?<TreeImg src={tree} cutwidth={trees-Math.floor(trees)}/>:null}
                </div>
                
                
            </PlasticResultWrapper>

            </div>
    )
}

export default PlasticResult;

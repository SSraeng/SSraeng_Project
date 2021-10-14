import React from 'react';
import { useSelector } from 'react-redux';
import { Highlight, Content,  PlasticResultWrapper } from '../styled_components/PlasticResultStyle';
import { tree } from '../etc/photos';
import styled from 'styled-components';
import Fade from "react-reveal/Fade"
const TreeImg = styled.img`
    height:15vh;
    width:${props=>10*props.cutwidth}vh;


`
function PlasticResult({user_name}) {
    const plastic_gram =useSelector(state=>state.plastic[0])
    const CO2e= useSelector(state=>state.co2[0])
    const trees= (CO2e*52)/(10*1000)
    return (

            <div style={{textAlign:"center"}}>
                <Fade>
            <PlasticResultWrapper>
                <Content>
                <Highlight>{user_name}님</Highlight>은(는) 평소<br/>
                    일주일에 {plastic_gram}g,<br/>
                    1년에 {plastic_gram*52/1000}kg 의 플라스틱을 소비하며<br/>
                    일주일에 <Highlight>&nbsp;{CO2e}g&nbsp; CO2e</Highlight>,<br/>
                    1년에 <Highlight>&nbsp;{CO2e*52/1000}kg&nbsp; CO2e</Highlight> 의 탄소발자국을 남깁니다.<br/><br/>
                    1년동안 이런 생활을 한다면?<br/>
                    30년생 신갈나무 <Highlight>&nbsp;{trees}그루&nbsp;</Highlight> 가 필요합니다
                </Content>
                <div>
                {
                    trees > 0? (() => { 
                        const array = []; 
                        for(let i = 0; i < Math.floor(trees); i++)
                        { 
                            array.push(<img src={tree} style={{height:"15vh", width:"10vh"}} alt="그림 수리중"/>);
                        } 
                        return array; })() : null
                }
                {trees-Math.floor(trees)!=0?<TreeImg src={tree} cutwidth={trees-Math.floor(trees)}/>:null}
                </div>
                
                
            </PlasticResultWrapper>
            </Fade>
            </div>
    )
}

export default PlasticResult;

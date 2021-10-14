import React from "react";
import styled from "styled-components";


const Graph = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    box-sizing: border-box;
    > div {
        padding-left: 5vh;
    }
`
const Bar = styled.div`
    height: 5vh;
    width: 50vw;
    background-color: white;
    border-radius: 40px;
    margin-top: 1vh;
    span {
        display: block;
        height: 5vh;
        line-height: 5vh;
        text-align: right;
        width: ${props => props.percentile};
        background-color: ${props => props.year === '2019'? "#1c4766": "#77a8d0"};
        border-radius: 40px;
        box-sizing: border-box;
        padding: 0 10px;
        color: white;
    }
`

export function GraphBox(props){
            return(
                <Graph>
                    <p style={{lineHeight:"12vh", width:"15vh"}}>{props.matter}</p>
                    <div>
                        <Bar year="2019" percentile={`${props.value19/10}%`}>
                            <span>{props.value19}</span>
                        </Bar>
                        <Bar percentile={`${props.value20/10}%`}>
                            <span>{props.value20}</span>
                        </Bar>
                    </div>
                </Graph>
            )
        }
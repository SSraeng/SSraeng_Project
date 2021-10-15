import React from "react";
import styled from "styled-components";
import {autumnsky,navy} from "../etc/colors"

const Graph = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    box-sizing: border-box;
    > div {
        padding-left: 5vh;
    }
    @media only screen and (max-width:768px){
        height: 10vh;
        > div {
            padding-left: 5vw;
        }
        > p {
            font-size: 1rem;
        }
    };
    @media only screen and (min-width:768px) and (max-width:1280px){
        > p {
            font-size: 1.2rem;
        }
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
        background-color: ${props => props.year === '2019'? navy: autumnsky};
        border-radius: 40px;
        box-sizing: border-box;
        padding: 0 10px;
        color: white;
    }

    @media only screen and (max-width:768px){
        height: 3vh;
        width: 60vw;
        margin-top: 2vh;
        span {
            display: block;
            height: 3vh;
            line-height: 3vh;
            border-radius: 40px;
            box-sizing: border-box;
            padding: 0 10px;
            color: white;
            font-size: 1rem;
        }
    }
    @media only screen and (min-width:768px) and (max-width:1300px){
        height: 3vh;
        width: 50vw;
        margin-top: 2vh;
        span {
            display: block;
            height: 3vh;
            line-height: 3vh;
            border-radius: 40px;
            box-sizing: border-box;
            padding: 0 10px;
            color: white;
            font-size: 1rem;
        }
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
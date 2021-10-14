import { useEffect, React, useRef } from 'react';
import styled from "styled-components";
import lottie from "lottie-web";

export function Wave (){
    const waveContainer = useRef();
    useEffect(()=>{
        lottie.loadAnimation({
            container:waveContainer.current,
            renderer:"svg",
            autoplay:true,
            animationData:require("../etc/wave.json")
        })
    },[])
    return(
        <Wrapper>
            <Wavy ref={waveContainer}></Wavy>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 30vh;
    left: 0;
    box-sizing: border-box;
    width:100%;
    height:100%;
};
    

`;

const Wavy = styled.div`
    width:100%;
`
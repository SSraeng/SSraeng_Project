import React, { useRef, useState, useCallback } from "react";
import styled from "styled-components";

export function Accordian(props){
    const parentRef = useRef(null);
    const childRef= useRef(null);
    const [isCollapse, setIsCollapse] = useState(true);
    const handleButtonClick = useCallback(
        event => {
            event.stopPropagation();
            if(parentRef.current === null || childRef.current === null) {
                return;
            }
            if (parentRef.current.clientHeight > 0){
                parentRef.current.style.height = "0";
            }else{
                parentRef.current.style.height=`${childRef.current.clientHeight}px`
            }
            setIsCollapse(!isCollapse);
        },[isCollapse]
    )
    const buttonText = isCollapse ? "열기" : "닫기"; 

    return(
        <Container>
            <Header onClick={handleButtonClick}>
                {props.title}
                <Button>{buttonText}</Button>
            </Header>
            <ContentsWrapper ref={parentRef}>
                <Contents ref={childRef}>{props.contents}</Contents>
            </ContentsWrapper>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    position:relative;
    flex-direction: column;
    border: 2px solid #6EB3D0;
    border-radius: 5px;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    height:3vh;
    margin: 0 2vw  0 0.5vw;
    font-size: 1rem;
    font-weight: 700;
    @media only screen and (max-width:768px){
        font-size: 0.8rem;
    }
`
const Button = styled.div`
    top: 0.1vh;
    right: 3vw;
    position: absolute;
`
const ContentsWrapper = styled.div`
    height: 0;
    width: 100%;
    overflow: hidden;
    transition: height 0.35s ease;
`
const Contents= styled.div`
    padding: 4px 8px;
    @media only screen and (max-width:768px){
        font-size: 0.2rem;
    }
`

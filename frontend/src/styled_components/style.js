import styled from "styled-components"

export const Hover = styled.div`

    &:hover{
        cursor:pointer;
        transform:scale(1.05);
    }

`

export const Select = styled(Hover)`
    width:35vh;
    height:5vh; 
    background-color: ${(props)=>props.num == props.i+1 ? "#2aa6dc" : "#e7feff"};
    margin: 0 auto; 
    margin-top:1vh;
    border-radius: 2vh;
    display: flex;
    flex-direction:column;
    justify-content:center;
    }
    &:hover{
        background-color: #87F5F5
    }
`
export const ResultWrapper = styled.div`
    height:40vh;
    display:flex; 
    flex-direction:column; 
    justify-content:center; 
    text-align:center;
    padding-bottom:30vh;

`


export const MiddleBlock = styled.div`
    height:20vh;
`
export const MiddleBlockF = styled.div`
    height:25vh;
`



import styled from "styled-components"
import {grayblue,jawsbar,autumnsky,navy} from "../etc/colors"

export const Hover = styled.div`

    &:hover{
        cursor:pointer;
        transform:scale(1.05);
    }

`;

export const Button = styled.button`
  appearance: none;
  background-color: #A5BDCC;
  border-radius:1vh;
  margin-right:1vh;
  font-size: 1rem;
  margin: 0 1vh 6vh 1vh;
  height: 4.5vh;
  width: 4.5vh;
  font-weight: 700;
  border: 0;
  border-color: #A5BDCC;
  color: #000000;
  
  &:hover {
    background-color:  #E5ECF1;
    cursor: pointer;
  }
`;

export const ButtonStyle = styled.button`
  appearance: none;
  background-color: #A5BDCC;
  border-radius:1vh;
  margin-right:1vh;
  font-size: 1rem;
  margin: 0 1vh 6vh 1vh;
  height: 2.7vh;
  width: 4vh;
  font-weight: 700;
  border: 0;
  border-color: #A5BDCC;
  color: #000000;
  
  &:hover {
    background-color:  #E5ECF1;
    cursor: pointer;
  }
`;

export const Select = styled(Hover)`
    width:35vh;
    height:6vh; 
    background-color: ${(props)=>props.num == props.i+1 ? autumnsky : grayblue};
    margin: 0 auto; 
    margin-top:1vh;
    border-radius: 2vh;
    display: flex;
    flex-direction:column;
    justify-content:center;
    font-size:3vh;
    font-weight:bold;
    color:#282828
    }
    &:hover{
        background-color: #1C4766;
        color:white;

    }
`
export const ResultWrapper = styled.div`
    height:40vh;
    display:flex; 
    flex-direction:column; 
    justify-content:center; 
    text-align:center;
    padding-bottom:30vh;
    padding-top:30vh;

`


export const MiddleBlock = styled.div`
    height:20vh;
`
export const MiddleBlockF = styled.div`
    height:25vh;
`


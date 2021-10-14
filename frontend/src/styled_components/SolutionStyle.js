import styled from "styled-components"

export const Answer = styled.h3`
    font-size: 2rem;
    color: #000000;
    margin-bottom: 1.6vh;
`;

export const Div = styled.div`
    font-size: 1.8rem;
    margin: 1vh 1vh 1vh 0.5vh;
    white-space: pre-line;
    
`;

export const AnswerList = styled.div`
    letter-spacing: .3rem;
    font-size: 2.3vh;
`;

export const Img = styled.img`
    height: 400px;
    width: 500px;
    object-fit: contain;
`;

export const ButtonStyle = styled.button`
  appearance: none;
  background-color: #A5BDCC;
  border-radius: 0.4em;
  font-size: 1.5rem;
  margin: 5px 3px 10px 3px;
  height: 5vh;
  width: 4em;
  font-weight: 600;
  border: 0;
  border-color: #A5BDCC;
  color: #000000;
  
  &:hover {
    background-color:  #E5ECF1;
    cursor: pointer;
  }
`;

export const SolutionWrapper = styled.div`
    height:0vh;
    display:flex; 
    flex-direction:column; 
    justify-content:center; 
    text-align:center;
    padding-bottom:30vh;
    padding-top:30vh;

`
import styled from "styled-components"

export const Answer = styled.h3`
    color: #000000;
`;

export const Div = styled.div`
    font-size: 1.05rem;
    margin: 10px 20px 5px 20px;
    white-space: pre-line;
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
  font-size: 0.9rem;
  margin: 5px 3px 10px 3px;
  height: 2.5vh;
  width: 5.5vh;
  font-weight: 600;
  border: 0;
  border-color: #A5BDCC;
  color: #000000;
  
  &:hover {
    background-color:  #E5ECF1;
    cursor: pointer;
  }
`;
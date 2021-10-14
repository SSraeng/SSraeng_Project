import styled from "styled-components"

export const Title = styled.h1`
    margin-top: 0.5rem;
    float: left;
    margin-bottom: 1rem;
    font-size:4vh;
`;

export const Content = styled.h3`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size:3.5vh;
`;

export const Plastic = styled.span`
  font-size: 2rem;
  color: #6EB3D0;
  font-weight: 700;
  margin-right: 3px;
  font-size:5vh;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 300px 300px;
    justify-content: center;
`;

export const Img = styled.img`
    height: 15vh;
    width: 15vh;
    object-fit: contain;
`;

export const Input = styled.input`
    text-align:"center";
    height: 3vh;
    border-radius: 0.3em;
    border: 0;
    background-color: #F1F1F2;
    margin: .5rem 0 1.5rem 0;
    font-weight: 600;
    font-size:1.1rem;
    width: 10vh;
`;

export const ButtonStyle = styled.button`
  appearance: none;
  background-color: #A5BDCC;
  border-radius: 0.4em;
  font-size: 1rem;
  margin: 0 3px 0 3px;
  height: 3vh;
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

import styled from "styled-components"

export const Title = styled.h2`
    margin-top: 0.5rem;
    float: left;
    margin-bottom: 1rem;
`;

export const Content = styled.h3`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

export const Plastic = styled.span`
  font-size: 2rem;
  color: #6EB3D0;
  font-weight: 700;
  margin-right: 3px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 300px 300px;
    justify-content: center;
`;

export const Img = styled.img`
    height: 110px;
    width: 163px;
    object-fit: contain;
`;

export const Input = styled.input`
    text-align:"center";
    height: 2.5vh;
    border-radius: 0.3em;
    border: 0;
    background-color: #F1F1F2;
    margin-bottom: 1.5rem;
    font-weight: 600;

`;

export const ButtonStyle = styled.button`
  appearance: none;
  background-color: #A5BDCC;
  border-radius: 0.4em;
  font-size: 1rem;
  margin: 0 3px 0 3px;
  height: 2.5vh;
  width: 3vh;
  font-weight: 700;
  border: 0;
  border-color: #A5BDCC;
  color: #000000;
  
  &:hover {
    background-color:  #E5ECF1;
    cursor: pointer;
  }
`;

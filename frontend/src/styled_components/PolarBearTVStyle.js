import styled from "styled-components";

export const PolarBearImageStyle = styled.div`
  margin: 0 auto;
  width: 70vh;
`;

export const PolarBearTVButton = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40vh;
  height:5vh;
  font-size: 3vh;
  font-weight: bold;
  background: #E5ECF1;
  opacity:70%;
  border-radius: 3px;
  border:none;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  color: #1C4766;

  :hover{
    background-color: #A5BDCC;
    box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.2);
    opacity:100%;
  }
`;

export const PolarBearWrapper = styled.div`
  position: relative;
  width: 70vh;
  margin: 0 auto;
  box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.2);
  img{
    margin: 0 auto;
    width: 100%;
    height: auto;

    :hover{
      opacity: 0.9;
    }

  }
  :hover{
      
      button{
        display: inline-block;
      }
    }
`;

export const PolarBearTVPlayer = styled.div`
  width: 60%;
  
  margin: 0 auto;
  
  /* border: 10px double ; */
`;

export const PolarBearTVOff = styled.div`
  margin: 2vh auto;
  text-align: center;
  width: 40vh;
  height:5vh;
  font-size: 3vh;
  font-weight: bold;
  background: rgba(255,50,50, 0.5);
  opacity:70%;
  border-radius: 3px;
  border:none;
  :hover{
    background-color: rgba(255,50,50, 0.9);
    opacity:100%;
  }
`;


export const ResultWrapper = styled.div`
    height:40vh;
    display:flex; 
    flex-direction:column; 
    justify-content:center; 
    text-align:center;
    padding-bottom:30vh;
    margin-top: 30vh;
`
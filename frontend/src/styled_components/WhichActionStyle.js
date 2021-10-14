import styled from 'styled-components';
import { jawsbar } from '../etc/colors';
export const WhichActionWrapper = styled.div`
    text-align: center;
    margin-top: 20vh;
    height:100vh;

`;

export const WhichActionExample = styled.div`

  margin: 0 auto;
  /* display: grid; */
  /* grid-template-columns: 20vw; */
  div{
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-size: 2.5rem;

    span{
      color: rgb(0,150,0);
    }
  }

  button{
    text-align: center;
    display: inline-block;
    width: 55vw;
    margin-bottom: 3vh;
    background-color: rgba(0,255,0,0.2);
    border: none;
    border-radius: 15px;
    font-size: 2rem;
    min-height: 2.5em;

    :hover{
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const WhichActionButtonWrapper = styled.div`
  padding-top: 3vh;
`;
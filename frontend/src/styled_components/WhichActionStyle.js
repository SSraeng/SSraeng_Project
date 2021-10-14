import styled from 'styled-components';

export const WhichActionWrapper = styled.div`
    text-align: center;
    margin-top: 5vh;
`;

export const WhichActionExample = styled.div`
  width: 50vw;
  margin: 0 auto;
  div{
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-size: 1.7rem;

    span{
      color: rgb(0,150,0);
    }
  }

  button{
    text-align: center;
    display: inline-block;
    width: 50vw;
    margin-bottom: 3vh;
    background-color: rgba(0,255,0,0.2);
    border: none;
    border-radius: 15px;
    font-size: 1.4rem;
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
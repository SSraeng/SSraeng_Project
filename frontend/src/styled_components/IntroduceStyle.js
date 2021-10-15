import styled from 'styled-components';

export const IntroWrapper = styled.div`
    padding-right: 2vw;
    margin-bottom: 5vh;
    height: 80vh;
    max-width: 30%;
    width: 100%;
    @media only screen and (max-width:768px){
        max-width: 100%;
        height: 60vh;
    }
    @media only screen and (min-width:768px) and (max-width:1300px){
        max-width: 45%;
        height: 50vh;
    }

`
export const IntroBox = styled.div`
    border: 1px solid #eaebef;
    box-sizing: border-box;
    border-radius: 30px;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 5px 25px 0 rgb(68 87 101 / 10%);
    background-color: #ffffff;
    transition: background-color 0.4s;
    cursor: pointer;

    :hover {
        box-shadow: 0 2px 30px 0 rgb(68 87 101 / 30%);
        background-color: #fcfcfc;
        transform: scale(1.01);
    }
`
export const ImageBox = styled.div`
    margin-top: 2vh;
    position: relative;
    text-align: center;
    height: 50%;
    margin: 2vh 2vw 0 ;
    @media only screen and (max-width:768px){
        height: 70%;
    }
    @media only screen and (min-width:768px) and (max-width:1300px){
        height: 50%;
    }
`
export const StopImage = styled.img`
    width: 100%;
`
export const MotionImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.1s;
    width: 100%;
    padding-bottom: 100%;

    :hover {
        opacity: 1;
    }
`
export const Content = styled.div`
    padding: 15px 40px 20px;
    text-align: left;
    font-size: 1.2rem;
    height: 50%;
    @media only screen and (max-width:768px){
        height: 20%;
        padding: 0 auto;
    }
    @media only screen and (min-width:768px) and (max-width:1300px){
        height: 30%;
    }
`
export const ContentHeader = styled.p`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 1vh;
`
export const Name = styled.span`
    font-size: 1.8rem;
    font-weight: 900;
    text-shadow: 1px 1px 1px grey;

    @media only screen and (max-width:768px){
        font-size: 1rem;
    }
    @media only screen and (min-width:768px) and (max-width:1480px){
        font-size: 1.4rem;
    }

`
export const Position = styled.span`
  color: rgb(68 87 101 / 65%);
  font-weight: 700;

    @media only screen and (max-width:768px){
        font-size: 0.7rem;
    }
    @media only screen and (min-width: 768px) and (max-width:1260px){
        font-size: 0.9rem;
        display: inline-block;
    }
    @media only screen and (min-width: 1260px) and (max-width:1480px){
        font-size: 1rem;
    }
`
export const SSRank = styled.span`
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 700;
    color:#6EB3D0;
    text-shadow: 1px 1px 1px grey;
    @media only screen and (max-width:768px){
        height:0px;
        display: none;
    }
    @media only screen and (min-width:768px) and (max-width:1300px){
        font-size: 1rem;
    }

`
export const Email = styled.p`
    font-weight: 600;
    color: rgb(68 87 101 / 65%);
    @media only screen and (max-width:768px){
        font-size: 0.8rem;
    }
    @media only screen and (min-width:768px) and (max-width:1300px){
        font-size: 1rem;
    }
`
export const ContentText = styled.p`
    padding-top: 4vh;
    font-size: 1.3rem;
    font-weight: 600;
    color: rgb(68 87 101 /90%);
    @media only screen and (max-width:768px){
        font-size: 0.8rem;
        display: none;
    }
    @media only screen and (min-width:768px) and (max-width:1300px){
        font-size: 1rem;
    }
`
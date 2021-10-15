import styled from "styled-components";

export const AccumulateBox = styled.div`
    width: 10vw;
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    font-weight: 900;
    margin-left: auto;
    margin-right: 5vw;
    margin-top: 5vh;
    color: #6EB3D0;
    text-align: center;
    text-shadow: 1px 2px 2px black;

    @media only screen and (max-width:768px){
        width: 100vw;
        height: 15vh;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
    };

    @media only screen and (min-width:768px) and (max-width:1600px){
        width: 20vw;
        font-size: 2rem;
    }

`
export const Main = styled.div`
    display: flex;
    flex-direction:column;
    text-align:center;
`
export const MainHeader = styled.div`
    position: relative;
    height:100vh;
    box-sizing: border-box;
    padding-bottom: 30vh;

    @media only screen and (max-width:768px){
        width: 100vw;
    };

`
export const Letter = styled.div`
    width: 30vw;
    height:100%;
    margin:0 auto;
    box-shadow: 1vh 2vh 4vh rgb(100 100 100 / 30%);

    @media only screen and (max-width:768px){
        width: 80vw;
    };

    @media only screen and (min-width:768px) and (max-width:1600px){
        width: 40vw;
    }
`
export const LetterContent = styled.div`
    font-family:Seulvely;
    font-size: 2.2rem;
    width:100%;
    height:70%;
    padding-top:10vh;
    box-sizing: border-box;

    @media only screen and (max-width:768px){
        font-size: 1.5rem;
    };

`
export const Writer= styled.div`
    font-family:Seulvely;
    font-size:2rem;
    width:100%;
    height:30%;
    padding-top: 5vh;
    box-sizing: border-box;

    @media only screen and (max-width:768px){
        font-size: 1.5rem;
    };
`
export const SadBear = styled.img`
    width: 20vw;
    position:absolute;
    bottom:10vh;
    right: 10vw;

    @media only screen and (max-width:768px){
        height: 30vh;
        width: auto;
        right: 0;
    };

`
export const MainBody = styled.div`
    font-size: 1.5em;
    font-weight:700;
    box-shadow: 0 -4vh 8vh rgb(100 100 100 / 30%);
`
export const Narration = styled.div`
    width: 100%;
    height: ${props => props.first ? "60vh" : "160vh"};
    padding-top: ${props => props.first ? "40vh" : "45vh"};
    font-size: ${props => props.first ? "1.8rem" : "1.5rem"};
    p {
        width: 80%;
        margin: 0 auto;
    }
    p + p {
        margin-top: 15vh;
    }
    h2 {
        margin-top: 10vh;
    }

    @media only screen and (max-width:768px){
        font-size: 0.8rem;
        padding-top: 20vh;
        height: ${props => props.first ? "50vh" : "140vh"};
    };


`
export const Analysis = styled.div`
    height: 69vw;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    @media only screen and (max-width:768px){
        height: 50vh;
    };
`
export const ContentsHeader = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    padding-top: ${props => props.article ? "": "10vh"}; ;
    flex-direction: ${props => props.article ? "": "column"};
    justify-content: ${props => props.article ? "space-between": "" };
    div + div {
        margin-top: ${props => props.article ? "": "7vh" };
    }
    @media only screen and (max-width:768px){
        width: 90%;
        padding-top: 0px;
        flex-direction: column;
    };
`
export const Title = styled.div`
    font-size: 2.3em;
    font-weight: 900;
    text-align: left;
    text-shadow: 3px 2px 5px white;
    line-height: 110%;

    @media only screen and (max-width:768px){
        font-size: 1.2rem;
        text-align: center;
    };
    @media only screen and (min-width:768px) and (max-width:1300px){
        font-size: 2.2rem;
    }
`
export const SubTitle = styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    text-align: left;
    @media only screen and (max-width:768px){
        visibility: hidden;
        height: 0px;
    };
    @media only screen and (min-width:768px) and (max-width:1300px){
        font-size: 0.9rem;
    }
`
export const Article = styled.div`
    height: 190vh;
    width: 100%;
    box-sizing: border-box;
    padding-top: 10vh;
    background-color: #A6BECC;
    position: relative;
    @media only screen and (max-width:768px){
        height: 90vh;
    };
`
export const Circle= styled.div`
    width: 3vh;
    height: 3vh;
    background-color: ${props => props.year === '2019'? "#1c4766": "#77a8d0"};
    border-radius: 50%;
    display: inline-block;
    margin-left: 5vw;
    @media only screen and (max-width:768px){
        width: 1.5vh;
        height: 1.5vh;
    }
    @media only screen and (min-width:768px) and (max-width:1200px){
        width: 2vh;
        height: 2vh;
    }
`
export const GraphBoxWrap = styled.div`
    width: 60vw;
    height:15vh;
    margin-left: 20vh;
    margin-top: 15vh;
    @media only screen and (max-width:768px){
        width: 90vw;
        margin: 10vh auto 0;
        height: 60vh;
        >p {
            margin-top: 2vh;
            font-size: 1rem;
        }
    };
    @media only screen and (min-width:768px) and (max-width:1280px){
        > p {
            font-size: 1.2rem;
        }
    }
`
export const SpeechBubble = styled.div`
    width: 30%;
    height: 50%;
    position: relative;
    font-family: Seulvely;
    font-weight: 700;
    font-size: 1.5rem;
	background: #ffffff;
	border: 5px solid #000000;
    box-shadow: 1vh 1vh 3vh rgb(100 100 100 / 30%);
    border-radius: 50%;
    box-sizing: border-box;
    padding-top: 5%;
    text-align: center;
    margin: 0 auto;
    ::after{
        top: 100%;
        left: 50%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(255, 255, 255, 0);
        border-top-color: #ffffff;
        border-width: 10px;
        margin-left: -10px;
    };
    ::before{
        top: 100%;
        left: 50%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(0, 0, 0, 0);
        border-top-color: #000000;
        border-width: 17px;
        margin-left: -17px;
    };

    @media only screen and (max-width:768px){
        width: 60%;
        height: 15vh;
        font-size: 0.3rem;
        padding-top: 4vh;
    }
    
`
export const GukgomQuestion =styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    margin-top: 15vh;
`
export const MainFooter = styled.div`
    height: 80vh;
    background-color: white;
    @media only screen and (max-width:768px){
        height: 60vh;
    }
    
`
export const TestButton = styled.button`
    height: 10vh;
    width: 15vw;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #6EB3D0;
    border: 0;
    box-shadow: 1vh 1vh 3vh rgb(100 100 100 / 30%);
    color: white;
    cursor: pointer;
    @media only screen and (max-width:768px){
        margin-top: 5vh;
        width: 60vw;
        height: 10vh;
    }
`
export const Accent = styled.span`
    font-size: 1.6rem;
    color: red;
    @media only screen and (min-width:768px) and (max-width:1300px){
        font-size: 1rem;
    }
`
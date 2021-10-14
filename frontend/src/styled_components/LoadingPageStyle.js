import styled, { keyframes } from 'styled-components';

export const LoadingTitle = styled.p`
color: #6EB3D0;
font-size: 3.2rem;
font-weight: 900;
margin-bottom: 1vh;
text-shadow: 1px 2px 3px black;

@media only screen and (max-width:768px){
    font-size: 1.5rem;
};
`
export const loader = keyframes`
0% {
    width: 0px;
}
70% {
    width: 100%;
    opacity: 1;
}
90% {
    opacity: 0;
    width: 100%;
}
100% {
    opacity: 0;
    width: 0px;
}
`

export const Loader = styled.div`
margin: 0 auto;
position: relative;
width: 35vw;
height: 40px;

:before {
    content: "";
    position: absolute;
    background-color: #6EB3D0;
    border-radius: 10px;
    top: 0px;
    left: 0px;
    height: 30px;
    width: 0px;
    z-index: 0;
    opacity: 1;
    animation: ${loader} 6s ease-in-out infinite;
}

:after {
    content: "LOADING ...";
    position: absolute;
    color: #fff;
    font-family: "Elice_Bold";
    font-size: 20px;
    width: 100%;
    height: 20px;
    line-height: 30px;
    left: 0;
    top: 0;
};

@media only screen and (max-width:768px){
    width: 60vw;
    height: 20px;
    :before {
        height: 20px;
    }
    :after {
        font-size: 10px;
        height: 12px;
        line-height: 20px;
    }
};

`
export const Polarbear = styled.img`
width: 30vw;
overflow: hidden;
border-radius: 50%;

@media only screen and (max-width:768px){
    width: 50vw;
};
`
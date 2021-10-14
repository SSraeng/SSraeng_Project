import styled from "styled-components"

export const Hover = styled.div`

    &:hover{
        cursor:pointer;
        transform:scale(1.05);
    }

`

export const Select = styled(Hover)`
    width:35vh;
    height:5vh; 
    background-color: ${(props)=>props.num == props.i+1 ? "#2aa6dc" : "#e7feff"};
    margin: 0 auto; 
    margin-top:1vh;
    border-radius: 2vh;
    display: flex;
    flex-direction:column;
    justify-content:center;
    }
    &:hover{
        background-color: #87F5F5
    }
`

export const RankElement = styled.div`
    width:${(props)=>props.width}em;
    text-align:center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

export const RankWrapper = styled.div`
    margin-top: 1vh;
    margin-bottom: 2vh;
    background-color: #87F5F5;
    width: 100%;
    font-size: 18px;
`;

export const RankDataWrapper = styled.div`
    :hover{
        background-color: rgba(135,245,245,0.4);
    }
`;

export const RankAllDataWrapper = styled.div`
    :hover{
        cursor: url("https://ssraeng.blob.core.windows.net/etc/pointer2.png"), auto;
    }
`;

export const RankPageButton = styled.div`
    text-align: center;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-bottom: 3vh;
    display: inline-block;
    font-size: 18px;
    background-color: rgb(170,0,255);
    border-radius: 3px;
    color: white;
    min-width: 8%;
    padding-top: 0.35vh;
    padding-bottom: 0.35vh;;

    :hover{
        background-color: rgba(170,0,255,0.7);
        cursor: pointer;
    }
`;

export const RankPageButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vh;
`;

export const RankPageTitle = styled.div`
    /* margin-top: 1vh; */
    margin-bottom: 0;
    text-align: center;
    font-size: 55px;
    color: rgb(100,100,255);
    img{
        width: 120px;
        vertical-align: bottom;
    }
`;

export const ResultWrapper = styled.div`
    height:50vh;
    display:flex; 
    flex-direction:column; 
    justify-content:center; 
    text-align:center;

`

export const MiddleBlock = styled.div`
    height:50vh;
`
export const MiddleBlockF = styled.div`
    height:25vh;
`


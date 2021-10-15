import styled from 'styled-components'

export const GradeWrapper = styled.div`
    height:30vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    padding-top: 200px;
    font-size:150%;
    
    img{
        width: 45vw;
        margin-top: 2vh;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    a{
        color: ${props=>props.color};

        text-shadow: -1px 1px 1px #929292,
                    1px 1px 1px #929292,
                    1px -1px 1px #929292,
                    -1px -1px 1px #929292;
        
        font-size: 60px;
    }

    h1{
        margin-bottom: 20px;
    }
`;

export const MeTooButton = styled.button`
    background-color: #E5ECF1;
    border: none;
    border-radius: 3px;
    text-align: center;
    width: 20vw;
    height: 60px;
    margin: 250px auto;
    font-size: 25px;
    font-weight: bold;
    
    color: #1C4766;
    box-shadow: 2px 2px 2px 2px gray;

    :hover{
        cursor: pointer;
    }
    
`;

export const SharedResult = styled.div`
    display: flex;
    flex-direction: column;
`;
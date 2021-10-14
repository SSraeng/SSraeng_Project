import styled from 'styled-components'

export const GradeWrapper = styled.div`
    height:30vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    padding-top: 20vh;
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
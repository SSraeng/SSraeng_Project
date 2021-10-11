import styled from "styled-components"

export const Hover = styled.div`

    &:hover{
        cursor:pointer;
        transform:scale(1.2);

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

`
// export const PolarBear = styled.div`
//     align:center;
//     width:80vh;
//     background:${(props)=>props.first};
//     &:hover{
//         background:${(props)=>props.second};

//     }
// `
// const PolarBear_img = styled.img.attrs({
//     src: "images/result_polarbear.jpg"
// })`
//     width:80vh;
// `
// const PolarBear = styled.
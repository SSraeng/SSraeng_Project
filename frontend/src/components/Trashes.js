import React from 'react';
import {plasticbag,container,cup,pet} from "../etc/photos"
import styled from 'styled-components';
const Trash = styled.img`
    max-height:10vh;
    max-width:10vh;
`

function Trashes({times}) {
    return (
        <div>
            {
                (() => { 
                const array = []; 
                for(let i = 0; i < times; i++)
                { 
                    const num = Math.floor(Math.random()*4)+1
                    if(num==1)
                    array.push(<Trash src={plasticbag} />); 
                    if(num==2)
                    array.push(<Trash src={container}/>); 
                    if(num==3)
                    array.push(<Trash src={cup}/>); 
                    if(num==4)
                    array.push(<Trash src={pet}/>); 
                    
                } 
                return array; })()
            }
        </div>
    );
}

export default Trashes;
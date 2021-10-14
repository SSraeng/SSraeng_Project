import React, { useState,useEffect } from 'react';
import ReactPlayer from 'react-player';
import {PolarBearImageStyle, PolarBearTVButton, PolarBearWrapper, PolarBearTVPlayer, PolarBearTVOff} from '../styled_components/PolarBearTVStyle';
import { ResultWrapper } from '../styled_components/style';
function PolarBearTV({content_url,content_image}) {
    
    const [tv, setTv] = useState(false);
    
    useEffect(()=>{
        const bodyTag = document.querySelector('body');
        const NavbarSpanTag1 = document.querySelector('.Basic-Bar span:nth-child(1)');
        const NavbarSpanTag2 = document.querySelector('.Basic-Bar span:nth-child(2)');
        const NavbarImgTag = document.querySelector('.Basic-Bar img');

        bodyTag.style.transitionProperty = 'background-color';
        bodyTag.style.transitionDuration = '2s';
        if(tv){
            bodyTag.style.backgroundColor = 'rgba(0,0,0,1.0)';
            NavbarSpanTag1.style.color = 'black';
            NavbarSpanTag2.style.color = 'black';
            NavbarImgTag.style.display = 'none';
        } else{
            bodyTag.style.backgroundColor = 'rgb(255,255,255)';
            NavbarSpanTag1.style.color = '#6EB3D0';
            NavbarSpanTag2.style.color = '#6EB3D0';
            NavbarImgTag.style.display = 'inline';
        }
    }, [tv])
    return (
        <div>
            <ResultWrapper>
            {tv?
                <>
                    <PolarBearTVPlayer>
                        <ReactPlayer url={content_url} playing='true' width="60vw" height="50vh"/>
                    </PolarBearTVPlayer>
                    <PolarBearTVOff onClick={()=>setTv(false)}>TV 끄기</PolarBearTVOff>
                </> :
                <PolarBearWrapper>
                <PolarBearImageStyle> <img src={content_image} /></PolarBearImageStyle>
                <PolarBearTVButton onClick={()=>setTv(true)}> TV 보기 </PolarBearTVButton>
                </PolarBearWrapper>
            }
            </ResultWrapper>
            
        </div>
    )
}

export default PolarBearTV;

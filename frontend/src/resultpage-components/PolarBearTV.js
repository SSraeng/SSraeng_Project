import React, { useState,useEffect } from 'react';
import ReactPlayer from 'react-player';
import { $CombinedState } from 'redux';
import {PolarBearImageStyle, PolarBearTVButton, PolarBearWrapper, PolarBearTVPlayer, PolarBearTVOff} from '../styled_components/PolarBearTVStyle';
import { ResultWrapper } from '../styled_components/style';
function PolarBearTV({content_url,content_image}) {
    
    const [tv, setTv] = useState(false);

    useEffect(()=>{
        const bodyTag = document.querySelector('body');
        bodyTag.style.transitionProperty = 'background-color';
        bodyTag.style.transitionDuration = '2s';
        if(tv){
            bodyTag.style.backgroundColor = 'rgba(0,0,0,1.0)';
        } else{
            bodyTag.style.backgroundColor = 'rgb(255,255,255)';
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

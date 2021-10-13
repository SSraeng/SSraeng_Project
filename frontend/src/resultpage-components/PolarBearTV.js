import React, { useState,useEffect } from 'react';
import ReactPlayer from 'react-player';
import {PolarBearImageStyle, PolarBearTVButton, PolarBearWrapper, PolarBearTVPlayer, PolarBearTVOff} from '../styled_components/PolarBearTVStyle';

function PolarBearTV({content_url,content_image}) {
    
    const [tv, setTv] = useState(false);

    return (
        <div>
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
            
        </div>
    )
}

export default PolarBearTV;

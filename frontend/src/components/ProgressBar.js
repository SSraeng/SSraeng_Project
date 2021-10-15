import React from 'react';
import {grayblue,jawsbar,autumnsky,navy} from "../etc/colors"

function ProgressBar({num}) {
    const minColor = `${jawsbar} 0%`;
    const maxColor = `${autumnsky} 60%`;
    return (
        <div>
        
        <div style={{marginLeft:"20vw",marginBottom:"5vh",height:"10vh",width:"60vh"}}>
        <div style={{textAlign:"left", width:"60vh", position:"relative"}}>{num+1}/10</div>
            <div style={{

                    borderRadius:"3vh",
                    width: `${(num+1)*6}vw`,
                    height: "6vh",
                    backgroundImage: `linear-gradient( to left , ${minColor} , ${maxColor})`,
                    position: "absolute",
                    zIndex:"1"
                  }}/>
            <div style={{ position: "absolute", zIndex:"-1", width:`${60}vw`, height:"6vh",backgroundColor:grayblue, borderRadius:"3vh"}}></div>
                  
        </div>
        
        </div>
    );
}

export default ProgressBar;
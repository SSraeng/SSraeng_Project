import React from 'react';


function ProgressBar({num}) {
    const minColor = `#E5ECF1 0%`;
    const maxColor = `#6EB3D0 60%`;
    return (
        <div>
        
        <div style={{marginLeft:"20vw",marginBottom:"5vh",height:"10vh",width:"60vh"}}>
        <div style={{textAlign:"left", width:"60vh", position:"relative"}}>{num+1}/10</div>
            <div style={{

                    borderRadius:"1vh",
                    width: `${(num+1)*6}vw`,
                    height: "4vh",
                    backgroundImage: `linear-gradient( to left , ${minColor} , ${maxColor})`,
                    position: "absolute",
                    zIndex:"1"
                  }}/>
            <div style={{ position: "absolute", zIndex:"-1", width:`${60}vw`, height:"4vh",backgroundColor:"#E5ECF1", borderRadius:"1vh"}}></div>
                  
        </div>
        
        </div>
    );
}

export default ProgressBar;
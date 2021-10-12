import React from 'react';


function ProgressBar({num}) {
    const minColor = `#fff 20%`;
    const maxColor = `#2aa6dc 70%`;
    return (
        <div>
        
        <div style={{marginLeft:"20vw",marginBottom:"5vh",height:"10vh",width:"60vh"}}>
        <div style={{textAlign:"left", width:"60vh"}}>{num+1}/10</div>
            <div style={{

                    borderRadius:"1vh",
                    width: `${(num+1)*8}vw`,
                    height: "4vh",
                    backgroundImage: `linear-gradient( to left , ${minColor} , ${maxColor})`,
                  }}/>
                  
        </div>
        
        </div>
    );
}

export default ProgressBar;
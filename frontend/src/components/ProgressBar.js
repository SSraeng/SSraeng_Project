import React from 'react';


function ProgressBar({num}) {
    const minColor = `#fff 20%`;
    const maxColor = `#2ac1bc 140%`;
    return (
        <div>
        
        <div style={{ marginBottom:"5vh", width: "50vh", margin:"auto", height:"10vh"}}>
        <div>{num}/10</div>
            <div style={{
                    borderRadius:"1vh",
                    width: `${8*num}vh`,
                    height: "4vh",
                    alignItems:'center',
                    backgroundImage: `linear-gradient( to left , ${minColor} , ${maxColor})`
                  }}/>
                  
        </div>
        
        </div>
    );
}

export default ProgressBar;
import React from 'react';


function ProgressBar({num}) {
    const minColor = `#fff 40%`;
    const maxColor = `#33cfff 60%`;
    return (
        <div>
        <span>{num * 10}%</span>
        <div style={{ width: "70vh", marginLeft:"auto", marginRight:"auto", height:"10vh"}}>
            <div style={{
                    width: `${7*num}vh`,
                    height: "5vh",
                    alignItems:'center',
                    backgroundImage: `linear-gradient( to left , ${minColor} , ${maxColor})`
                  }}/>
        </div>
        </div>
    );
}

export default ProgressBar;
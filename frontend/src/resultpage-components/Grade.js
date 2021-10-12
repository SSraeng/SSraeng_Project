import React, { useState,useEffect } from 'react';


function Grade({data}) {
    const {user_name,tier_value,tier,score,participants,ranking} = data
    
    return (
                    <div>
                    <div style={{marginLeft:"2vh", marginTop:"2vh", align:"center"}}>
                        <h4 style={{textAlign:"left"}}>{user_name}님, 당신은</h4>
                        <h1 style={{textAlign:"center"}}>쓰랭 {tier_value}등급입니다.</h1>
                    <div>
                            <img src={tier} width="300px"style={{marginTop:"2vh"}} />
                    </div>
                        <h2 style={{textAlign:"center"}}>총 점수는{score}점,</h2>
                        <h2 style={{textAlign:"center"}}>{participants}명 중 {ranking}등 입니다.</h2>
                    </div>
                    </div>
    )
}

export default Grade;

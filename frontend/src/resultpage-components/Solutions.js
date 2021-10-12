import React, { useState,useEffect } from 'react';
import explain from "../etc/explains.json"

function Solution() {

    return (
                    <div>
                        {
                            explain.map((item,index)=>{
                                <div key={index}>
                                    {item.question}{item.answer}
                                    <div>
                                        {
                                            item.typ==1?
                                            item.explain:
                                            <div>
                                                <img src={item.explain}/>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                            )
                        }
                    </div>
    )
}

export default Solution;

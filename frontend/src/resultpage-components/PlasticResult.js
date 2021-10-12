import React, { useState,useEffect } from 'react';

function PlasticResult() {

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

export default PlasticResult;

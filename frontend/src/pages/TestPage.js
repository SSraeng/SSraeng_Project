import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import store from '../store';
function TestPage() {

    useEffect(() => {
        axios({
            method: "post",
            url: "/api/test/test",
            data: { name: store.getState().name, submit: [1, 2, 1, 2] }
        })
        .then((res)=>{console.log(res)})
        .catch((e)=>alert(e));
    })
    
    return (
        <div >
            <NavBar />
            
        </div>
    )
}

export default TestPage;

import React from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import store from '../store';
function TestPage() {

    return (
        <div >
            <NavBar />
            {
                axios.post({
                    method: "post",
                    url: "/api/test/test",
                    data: { name: store.getState().name, submit: [1, 2, 1, 2] }
                })
                .then((res)=>{console.log(res)})
                .catch((e)=>alert(e))
            }
        </div>
    )
}

export default TestPage;

import React from 'react';
import NavBar from '../components/NavBar';
import store from '../store';
function ResultPage() {

    return (
        <div >
            <NavBar />
            {store.getState().name}
        </div>
    )
}

export default ResultPage;

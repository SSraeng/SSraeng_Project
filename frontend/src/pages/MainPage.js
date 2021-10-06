import React from "react";
import NavBar from '../components/NavBar';
import { useHistory } from 'react-router';
import Analysis from "../components/Analysis";

function MainPage() {
    const history = useHistory()
    
    return (
        <div className='mainpage'>
            <NavBar />
            <div className="accumulate_box">
                <h2>누적 사용자 수</h2>
                <p>12,345,678명</p>
                {/* GET으로 누적 확진자 수 받아오는 Section */}
            </div>
            <section className="data_analysis_box">
                <h2>데이터 분석</h2>
                <div className="data_analysis_box_chart_list">
                    <Analysis />
                </div>
            </section>
            <button onClick={() => history.push("/test/test")}>테스트하기</button>
        </div>
    )
}

export default MainPage;

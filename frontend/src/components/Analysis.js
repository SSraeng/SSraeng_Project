import { useState, useEffect, React } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import axios from 'axios';


function Analysis (){
    const [confirmedData, setConfirmedData] = useState({})
    const [quarantinedData, setQuarantinedData] = useState({})
    const [comparedData, setComparedData] = useState({})
    
    // 차트 데이터를 받는 부분입니다.
    useEffect(()=>{
        const fetchEvents = async () =>{
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr")
            makeDate(res.data)
        }
    // 서버에서 데이터를 받아올 경우 달라지는 부분입니다.
    // 현재는 코로나 데이터를 가공해서 올려 놓았습니다. 나중에 분석한 데이터 결과를 띄우는 부분입니다.
        const makeDate= (items) =>{
            const arr = items.reduce((acc,cur)=>{
                const currentDate = new Date(cur.Date);
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();
                const confirmed = cur.Confirmed;
                const active = cur.Active;
                const death = cur.Deaths;
                
                const findItem = acc.find(a=> a.year === year && a.month === month);
                if(!findItem){
                    acc.push({year, month, date, confirmed, active, death, })
                }
                if(findItem && findItem.date < date){
                    findItem.active = active;
                    findItem.death = death;
                    findItem.date = date;
                    findItem.year = year;
                    findItem.month = month;
                    findItem.confirmed = confirmed;
                }       
                return acc;
            }, [])
            
            const labels = arr.map(a=>`${a.month+1}월`)
            setConfirmedData({
                labels,
                datasets: [
                    {
                        label: "국내 누적 확진자",
                        backgroundColor: "red",
                        fill: true,
                        data: arr.map(a=>a.confirmed)
                    },
                ]
                
            })
            setQuarantinedData({
                labels,
                datasets: [
                    {
                        label: "월별 격리자 현황",
                        border: "black",
                        fill: false,
                        data: arr.map(a=>a.active)
                    },
                ]
                
            });
            const lastMonth = arr[arr.length - 1]
            setComparedData({
                labels: ["확진자", "사망"],
                datasets: [
                    {
                        label: "누적 확진, 사망 비율",
                        backgroundColor: ["red", "blue"],
                        border: ["red", "blue"],
                        fill: false,
                        data: [lastMonth.confirmed, lastMonth.death]
                    },
                ]
            })
        }
        
        fetchEvents();
    },[])
    
    return(
        <div className='data_analysis'>
            <div className='data_analysis_BarChart'>
                <Bar data={confirmedData}
                     options= {options["BarChart"]}/>
            </div>
            <div className='data_analysis_LineChart'>
                <Line data={quarantinedData}
                      options={options["LineChart"]}/>
            </div>
            <div className='data_analysis_DoughnutChart'>
                <Doughnut data={comparedData}
                          options={options["DoughnutChart"]}/>
            </div>
        </div>
    )
}

export default Analysis



const options = {
    "BarChart":{
        plugins: {
            title: { display: true, text: "누적 확진자 수", fontSize: 16 },
            legend: { display: true, position: "bottom" },
            maintainAspectRatio: false,
        }
    },
    "LineChart":{
        plugins: {
            title: { display: true, text: "월별 격리자 현황", fontSize: 16 },
            legend: { display: true, position: "bottom" },
            maintainAspectRatio: false,
        }
    },
    "DoughnutChart":{
        plugins: {
            title: { display: true, text: `누적 확진, 사망 비율 (${new Date().getMonth + 1}월)`, fontSize: 16 },
            legend: { display: true, position: "bottom" },
            maintainAspectRatio: false,
        }
    }
}
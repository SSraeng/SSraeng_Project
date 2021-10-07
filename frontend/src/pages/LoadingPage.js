import { useEffect, React } from 'react';
import { useHistory } from 'react-router';


function LoadingPage(){
    const history = useHistory();
    useEffect(()=>{
        const toResultPage= () => {
            setTimeout(()=>{
                history.push("/result")
            }, 5000)
        }
        toResultPage()
    },[])

    return(
        <div className="loadingPage">
            <div className="loading_header">
                <p   className="loading_header_title">로딩 중...</p>
                <div className="loading_header_box">
                    <div className="loader"></div>
                </div>
            </div>
            <div className="loading_content">
                <div className="loading_content_image_box" >
                    <img className="loading_content_image_bear" src="images/polarbear.png" alt="빙하 위의 위태로운 북극곰"/>
                    <img className="loading_content_image_sea" src="images/sea.png" alt="바다 일러스트레이션"/>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage;

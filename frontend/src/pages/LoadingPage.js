import { useEffect, React } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';
import { Wave } from '../components/Wave';
import {LoadingTitle, Loader, Polarbear} from '../styled_components/LoadingPageStyle';


function LoadingPage(){
    const location= useLocation();
    const next = location.state.next;
    const history = useHistory();
    useEffect(()=>{
        const toResultPage= () => {
            setTimeout(()=>{
                history.push(next)
            }, 5000)
        }
        toResultPage()
    },[history, next])

    return(
        <div className="loadingPage">
            <div className="loading_header">
                <LoadingTitle>로딩 중...</LoadingTitle>
                <Loader></Loader>
            </div>
            <div className="loading_image_box">
                    <Polarbear src="images/polarbear.png" alt="빙하 위의 위태로운 북극곰"/>
            </div>
            <Wave/>
        </div>
    )
}

export default LoadingPage;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import MainPage from './pages/MainPage';
import RankingPage from './pages/RankingPage';
import ResultPage from './pages/ResultPage';
import LoadingPage from './pages/LoadingPage';
import TestPage from './pages/TestPage';
import AboutPage from './pages/AboutPage';
import UserInfoPage from './pages/UserInfoPage';
import { useSelector } from 'react-redux';

 axios.defaults.baseURL = 'http://127.0.0.1:5000';

function App() {
  const userId= useSelector((state)=>state.user_id[0])
  console.log(userId)
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path={userId?"/ranking/:user_id":"/ranking"} component={RankingPage} />
            <Route exact path="/result/:user_id" component={ResultPage} />:
            <Route exact path="/loading" component={LoadingPage} />
            <Route exact path="/test/test" component={TestPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/test/userinfo" component={UserInfoPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

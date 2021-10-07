import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import MainPage from './pages/MainPage';
import RankingPage from './pages/RankingPage';
import ResultPage from './pages/ResultPage';
import TestPage from './pages/TestPage';
import AboutPage from './pages/AboutPage';
import UserInfoPage from './pages/UserInfoPage';



 axios.defaults.baseURL = 'http://127.0.0.1:5000';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/ranking" component={RankingPage} />
            <Route exact path="/result" component={ResultPage} />
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

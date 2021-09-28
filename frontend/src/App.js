import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./pages/MainPage"
import RankingPage from './pages/RankingPage';
import ResultPage from './pages/ResultPage';
import TestPage from './pages/TestPage';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/ranking" component={RankingPage} />
            <Route exact path="/result" component={ResultPage} />
            <Route exact path="/test" component={TestPage} />
            

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

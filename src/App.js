import logo from './logo.svg';
import './App.css';

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// custom
import Sidenav from "./components/common/Sidenav"
import Temp from "./components/Temp"


// main entry point
function App() {
  return (
    <Router>

      <Sidenav />

      <Switch>
        <main className={`app container`}>
          <Route exact path={[`/`, `/home`]} component={Temp}/>
          <Route path={`/about`} component={Temp}/>
          <Route path={`/terms`} component={Temp}/>
        </main>
      </Switch>

    </Router>
  );
}

export default App;

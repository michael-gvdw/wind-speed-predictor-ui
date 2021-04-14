import './App.css';

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// custom
import Sidenav from "./components/common/Sidenav"
import WindForecastComponent from "./components/WindForecastComponent"
import ContactInfoComponent from './components/common/ContactInfoComponent'



// main entry point
function App() {
  return (
    <Router>

      <Sidenav />

      <Switch>
        <main className={`app`}>
          <Route exact path={[`/`, `/home`]} component={WindForecastComponent}/>
          <Route path={`/about`} component={ContactInfoComponent}/>
          <Route path={`/terms`} component={WindForecastComponent}/>

        </main>
      </Switch>

    </Router>
  );
}

export default App;

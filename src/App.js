import "./App.scss";

import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MarsView from "./components/Maps/Mars";
import MoonView from "./components/Maps/Moon";
import MercuryView from "./components/Maps/Mercury";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/explore/mars" exact component={MarsView} />
          <Route path="/explore/moon" exact component={MoonView} />
          <Route path="/explore/mercury" exact component={MercuryView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

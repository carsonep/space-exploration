import "./App.scss";

import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MarsView from "./components/Maps/Mars";
import MoonView from "./components/Maps/Moon";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/explore/mars" exact component={MarsView} />
          <Route path="/explore/moon" exact component={MoonView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

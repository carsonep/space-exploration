import "./App.scss";

import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SpaceView from "./components/SpaceView/SpaceView";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/maps/mars" exact component={SpaceView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

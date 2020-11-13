import React from "react"
import './App.css';
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

const NoMatch = ({ location }) => (
  <div>No route match for {location.pathname}</div>
)

function App() {
  // localStorage.clear()
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route component={NoMatch}/>
      </Switch>
    </div>
  );
}

export default App;

import React from "react"
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./pages/Home/Home";

const NoMatch = ({ location }) => (
  <div>No route match for {location.pathname}</div>
)

function App() {
  // localStorage.clear()
  return (
    <div className="App">
      <Router>
        <Switch>
          <Home/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

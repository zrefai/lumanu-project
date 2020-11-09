import React from "react"
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./pages/Home/Home";

// import { Octokit } from "@octokit/core"
// const octokit = new Octokit();
// octokit.request('GET /search/repositories', {
//   q: 'pokemon dictionary'
// }).then(
//   (response) => {
//     console.log(response);
//   }
// );

const NoMatch = ({ location }) => (
  <div>No route match for {location.pathname}</div>
)

function App() {
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

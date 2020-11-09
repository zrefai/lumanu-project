import { Octokit } from "@octokit/core"
import './App.css';

const octokit = new Octokit();

octokit.request('GET /search/repositories', {
  q: 'pokemon dictionary'
}).then(
  (response) => {
    console.log(response);
  }
);

function App() {
  return (
    <div className="App">
      Wow
    </div>
  );
}

export default App;

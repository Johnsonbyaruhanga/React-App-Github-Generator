import React from "react";
import "./App.css";
import GithubAPI from "./components/GithubAPI";
function App() {
  return (
    <div className="App-profile">
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Github user
        </a>
      </nav>
      <GithubAPI />
    </div>
  );
}

export default App;

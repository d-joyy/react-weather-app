import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>

      <footer>
        Weather app project coded by Danielle and is{" "}
        <a href="https://github.com/d-joyy/react-weather-app">
          Open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://app.netlify.com/sites/zen-swanson-1c04e2/deploys">
          Netlify.
        </a>
      </footer>

      <script src="src/app.js"></script>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeTracker from "./components/generic/TimeTracker";

function App() {
  return (
    <div className="App">
      <TimeTracker type={"stopwatch"} duration={100} />
    </div>
  );
}

export default App;

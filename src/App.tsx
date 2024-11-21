import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const c = ["a", "b", "c"];
  const [text, setText] = useState<string>("");
  console.log("브랜치");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {
          c.map((test, index) => (
            <div key={index}>{test}</div>
          ))
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
